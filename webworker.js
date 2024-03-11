// importScripts("/pyodide/pyodide.js");
importScripts("https://cdn.jsdelivr.net/pyodide/v0.23.2/full/pyodide.js");

let matplotlibInstalled = false
let matplotlibInitScript = `
import warnings
warnings.filterwarnings("ignore")

def ensure_matplotlib_patch():
    import matplotlib.pyplot
    import base64
    import pyodide
    import js
    from io import BytesIO
    import matplotlib
    matplotlib.use("agg")    

    _old_show = matplotlib.pyplot.show

    def show():
        buf = BytesIO()
        matplotlib.pyplot.savefig(buf, format='png')
        buf.seek(0)
        # encode to a base64 str
        img = base64.b64encode(buf.read()).decode('utf-8')
        
        html_str = f'<img src="data:image/png;base64,{img}">'
        js.postMessage(pyodide.ffi.to_js({'content': html_str, 'finish': False, 'type': 'html', 'id': js._pyodide_execution_id}))
        matplotlib.pyplot.clf()

    matplotlib.pyplot.show = show

def change_matplotlib_style():

    import matplotlib.pyplot

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
    matplotlib.pyplot.style.use('style.mplstyle')

ensure_matplotlib_patch()
# change_matplotlib_style()
`

let pandasInstalled = false
let pandasInitScript = `
import pandas.plotting._core

def trigger_matplotlib_import():
  pandas.plotting._core.org_plotting_load_backend = pandas.plotting._core._load_backend

  def new_plotting_load_backend(backend_str):
    import matplotlib
    matplotlib.use("agg")
    return pandas.plotting._core.org_plotting_load_backend(backend_str)

  pandas.plotting._core._load_backend = new_plotting_load_backend
trigger_matplotlib_import()
`

let obj = null
let eid = null

let renderObjectScript = `
import base64
import io
import pandas as pd
import json
import js
import micropip
import pyodide

def _py_object_to_html():

    global obj
    global eid

    html_str = None

    packages = "".join(micropip.list())

    rendered = False

    if 'pandas' in packages:
      import pandas as pd

      if isinstance(obj, pd.Series):
          obj = obj.to_frame()
          rendered = True
      
      if isinstance(obj, pd.DataFrame):
          html_str = obj.round(2).to_html(max_rows=10, max_cols=10)
          rendered = True

    if 'plotly' in packages:
      from plotly.graph_objects import Figure
      import plotly.io as pio

      if isinstance(obj, Figure):
        
        f = io.StringIO()
        pio.write_html(obj, file=f, post_script=f'console.log("resize-iframe-{js._pyodide_execution_id}");parent.postMessage("resize-iframe-{js._pyodide_execution_id}", parent.location.origin)')
        f.seek(0)
        html_str = f.read()
        js_obj = pyodide.ffi.to_js({'content': html_str, 'id': js._pyodide_execution_id, 'type':'iframe', 'finish': True})
        js.postMessage(js_obj)
        return

    if not rendered and hasattr(obj, 'to_html'):
      html_str = obj.to_html()
    
    if html_str is not None:
        ret = {'content': html_str, 'type': 'html', 'finish': True, 'id': eid}
    else:
        ret = {'content': str(obj), 'type': 'text', 'finish': True, 'id': eid}
    
    if eid:
        ret['id'] = eid

    js.postMessage(pyodide.ffi.to_js(ret))
        
    # return json.dumps(ret)

_py_object_to_html()
`

let currentId = -1
let document = 1

async function loadPyodideAndPackages() {
  console.log('**WORKER: loading pyodide')
  try {
    self.pyodide = await loadPyodide({
      lockFileURL: location.origin + "/pyodide/repodata.json",
      // indexURL: "/pyodide/",
      // indexURL: "https://cdn.jsdelivr.net/pyodide/v0.20.0/full/",
      stdout: (text) => { self.postMessage({ content: text, type: 'text', id: currentId, finish: false }) },
      stderr: (text) => { self.postMessage({ content: text, type: 'text', id: currentId, finish: false }) },
    });

    await self.pyodide.loadPackage(['micropip', 'pandas', 'jinja2']);
    self.postMessage({ content: '安裝 pandas     (數據運算使用)', type: 'text', id: currentId, finish: false })
    // await self.pyodide.loadPackage(['matplotlib']);
    // self.postMessage({ content: '安裝 matplotlib (繪製圖表使用)', type: 'text', id: currentId, finish: false })
    await self.pyodide.loadPackage(['ta-lib']);
    self.postMessage({ content: '安裝 talib (計算技術指標)', type: 'text', id: currentId, finish: false })
    await self.pyodide.loadPackage(['finlab']);
    self.postMessage({ content: '安裝 finlab     (財經研究使用)', type: 'text', id: currentId, finish: false })
    // await self.pyodide.loadPackage(['micropip', 'jinja2', 'matplotlib', 'pandas', 'finlab', 'ta-lib'], messageCallback = msgCallBack);

    // console.log('**WORKER: load init script')
    await self.pyodide.runPythonAsync('from finlab import data, backtest')
    // console.log('**WORKER: load complete')
    self.postMessage({ content: '安裝 Python 完成，如需要額外的 Package，可以直接用 import 自動安裝。', type: 'text', id: currentId, finish: false })

  } catch (e) {
    console.log(e)
    self.postMessage({ content: '安裝 Python 失敗，請洽 Discord 討論區，會儘速修復！', type: 'text', id: currentId, finish: false })

  }
}

// import importlib.util
// if importlib.util.find_spec('matplotlib'):

let checkPlot = `
try:
  import matplotlib.pyplot as plt
  for i in plt.get_fignums():
    if plt.figure(i).get_axes():
        plt.show()
except:
  pass
`

let pyodideReadyPromise = loadPyodideAndPackages()


onmessage = async function (e) {
  await pyodideReadyPromise;

  if (e.data.cmd === "setInterruptBuffer") {
    pyodide.setInterruptBuffer(e.data.interruptBuffer);
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

    if (python.indexOf('plot') !== -1 && !matplotlibInstalled) {
      await self.pyodide.loadPackage(['matplotlib']);
      await self.pyodide.runPythonAsync(matplotlibInitScript);
      matplotlibInstalled = true
    }

    if ('pandas' in self.pyodide.loadedPackages && !pandasInstalled) {
      await self.pyodide.runPythonAsync(pandasInitScript);
      pandasInstalled = true
    }

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
    // let namespace = pyodide.globals.get("dict")();
    // namespace.set('obj', results)
    // namespace.set('eid', id)
    self.pyodide.globals.set('obj', results)
    self.pyodide.globals.set('eid', id)

    r = await self.pyodide.runPythonAsync(renderObjectScript)
    // namespace.destroy()

    console.log('**WORKER: post message')

    // self.postMessage({ content: String(results), id, type: 'text', finish: true });
    // this.self.postMessage({ ...JSON.parse(r), id })

    console.log('**WORKER: stopped')

  } catch (error) {
    self.postMessage({ content: error.message, id, type: 'error', finish: true });
    console.log(error)
  }
};
