let pyodideWorker = new Worker("/webworker.js");

let interruptBuffer = null;
// if (crossOriginIsolated) {
//   interruptBuffer = new Uint8Array(new SharedArrayBuffer(1));
//   pyodideWorker.postMessage({ cmd: "setInterruptBuffer", interruptBuffer });
// }
function interruptExecution() {
  // 2 stands for SIGINT.
  if (crossOriginIsolated) {
    interruptBuffer[0] = 2;
  }
}

let outputCallBack = (data) => console.log(data.content)

function setOutputCallBack(c) {
  outputCallBack = c
}


const callbacks = {};

pyodideWorker.onmessage = (event) => {

  if (event.data.finish) {
    const { id, ...data } = event.data;
    const onSuccess = callbacks[id];
    delete callbacks[id];
    onSuccess(data);
  }
  outputCallBack(event.data)
};

const asyncRun = (() => {
  let id = 0; // identify a Promise
  return (script, context) => {
    // the id could be generated more carefully
    id = (id + 1) % Number.MAX_SAFE_INTEGER;
    return new Promise((onSuccess) => {
      callbacks[id] = onSuccess;
      pyodideWorker.postMessage({
        ...context,
        python: script,
        id,
      });
    });
  };
})();

export { asyncRun, interruptExecution, setOutputCallBack };