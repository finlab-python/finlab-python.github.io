// importScripts("/pyodide/pyodide.js");
importScripts("https://cdn.jsdelivr.net/pyodide/v0.20.0/full/pyodide.js");


let iniScript = `
import warnings
warnings.filterwarnings("ignore")
import base64
import os
from io import BytesIO
import matplotlib.pyplot
import pandas as pd
import js
import pyodide

def ensure_matplotlib_patch():
    _old_show = matplotlib.pyplot.show

    def show():
        buf = BytesIO()
        matplotlib.pyplot.savefig(buf, format='png')
        buf.seek(0)
        # encode to a base64 str
        img = base64.b64encode(buf.read()).decode('utf-8')
        
        html_str = f'<img src="data:image/png;base64,{img}">'
        js.postMessage(pyodide.to_js({'content': html_str, 'finish': False, 'type': 'html', 'id': js._pyodide_execution_id}))
        matplotlib.pyplot.clf()

    matplotlib.pyplot.show = show

f = open('style.mplstyle', 'w')
f.write("""
# Seaborn common parameters
# .15 = dark_gray
# .8 = light_gray
text.color: .15
axes.labelcolor: .15
legend.frameon: False
legend.numpoints: 1
legend.scatterpoints: 1
xtick.direction: out
ytick.direction: out
xtick.color: .15
ytick.color: .15
axes.axisbelow: True
font.family: sans-serif
grid.linestyle: -
lines.solid_capstyle: round

# Seaborn darkgrid parameters
axes.grid: True
axes.facecolor: EAEAF2
axes.edgecolor: white
axes.linewidth: 0
grid.color: white
xtick.major.size: 0
ytick.major.size: 0
xtick.minor.size: 0
ytick.minor.size: 0

# Custom
font.sans-serif: Overpass, Helvetica, Helvetica Neue, Arial, Liberation Sans, DejaVu Sans, Bitstream Vera Sans, sans-serif
axes.prop_cycle: cycler('color', ['7A76C2', 'ff6e9c98', 'f62196', '18c0c4', 'f3907e', '66E9EC'])
image.cmap: RdPu
figure.facecolor: fefeff
savefig.facecolor: fefeff
""")
f.close()
    
ensure_matplotlib_patch()
matplotlib.pyplot.style.use('style.mplstyle')
`

let renderObjectScript = `
import base64
import io
import pandas as pd
import json

def _py_object_to_html():

    global obj
    global eid
    
    html_str = None
    
    if isinstance(obj, pd.Series):
        obj = obj.to_frame()
    
    if isinstance(obj, pd.DataFrame):
        html_str = obj.round(2).to_html(max_rows=10, max_cols=10)
    
    if html_str is not None:
        ret = {'content': html_str, 'type': 'html', 'finish': True, 'id': eid}
    else:
        ret = {'content': str(obj), 'type': 'text', 'finish': True, 'id': eid}
    
    if eid:
        ret['id'] = eid
        
    return json.dumps(ret)

_py_object_to_html()
`

let currentId = -1
let document = 1

async function loadPyodideAndPackages() {
  console.log('**WORKER: loading pyodide')
  self.pyodide = await loadPyodide({
    // indexURL: "/pyodide/",
    // indexURL: "https://cdn.jsdelivr.net/pyodide/v0.20.0/full/",
    stdout: (text) => { self.postMessage({ content: text, type: 'text', id: currentId, finish: false }) },
    stderr: (text) => { self.postMessage({ content: text, type: 'text', id: currentId, finish: false }) },
  });
  function msgCallBack(v) {
    let msg = v
    if (v.indexOf('from') !== -1) {
      msg = '↳ ' + v.split(' ').splice(0, 2).join(' ') + '...'
    }
    self.postMessage({ content: msg, type: 'text', id: currentId, finish: false })
  }
  console.log('**WORKER: load packages')

  const base_url = 'https://ai.finlab.tw'

  await self.pyodide.loadPackage(["numpy", "pandas", "cycler", "kiwisolver", "Pillow", "packaging",
    base_url + `/pyodide/TA_Lib-0.4.24-cp310-cp310-emscripten_wasm32.whl`,
    base_url + `/pyodide/matplotlib-3.5.1-cp310-cp310-emscripten_wasm32.whl`,
    base_url + `/pyodide/finlab-0.3.4.dev1-cp310-cp310-emscripten_wasm32.whl`], messageCallback = msgCallBack);
  console.log('**WORKER: load init script')
  await self.pyodide.runPythonAsync(iniScript)
  console.log('**WORKER: load complete')
  self.postMessage({ content: 'done!', type: 'text', id: currentId, finish: false })
}

// import importlib.util
// if importlib.util.find_spec('matplotlib'):

let checkPlot = `
import matplotlib.pyplot as plt
for i in plt.get_fignums():
    if plt.figure(i).get_axes():
        plt.show()
`

let pyodideReadyPromise = loadPyodideAndPackages()


onmessage = async function (e) {
  console.log('**WORKER: pre loading pyodide')
  await pyodideReadyPromise;
  console.log('**WORKER: post load complete')

  if (e.data.cmd === "setInterruptBuffer") {
    pyodide.setInterruptBuffer(msg.data.interruptBuffer);
    return;
  }

  const { id, python, ...context } = e.data;
  for (const key of Object.keys(context)) {
    self[key] = context[key];
  }
  self['_pyodide_execution_id'] = id

  // Now is the easy part, the one that is similar to working in the main thread:
  try {
    console.log('**WORKER: running script')
    console.log(python)

    await self.pyodide.loadPackagesFromImports(python);
    currentId = id

    let results = await self.pyodide.runPythonAsync(python);

    // check plot
    await this.self.pyodide.runPythonAsync(checkPlot)

    // render string
    if (typeof results === 'string' || results instanceof String || results === undefined) {
      console.log('**WORKER: return object is string')
      self.postMessage({ content: results, id, type: 'text', finish: true });
      return
    }

    console.log('**WORKER: render object rendering')

    // render object
    let namespace = pyodide.globals.get("dict")();
    namespace.set('obj', results)
    namespace.set('eid', id)

    r = await self.pyodide.runPythonAsync(renderObjectScript, namespace)
    namespace.destroy()

    console.log('**WORKER: post message')

    // self.postMessage({ content: String(results), id, type: 'text', finish: true });
    this.self.postMessage({ ...JSON.parse(r), id })

    console.log('**WORKER: stopped')

  } catch (error) {
    self.postMessage({ content: error.message, id, type: 'error', finish: true });
  }
};
