const workerScript = `
  self.onmessage = (event) => {
    let { num } = event.data;
    const interval = setInterval(() => {
      self.postMessage({ num: --num });
      if (num <= 0) {
        clearInterval(interval);F
        console.log("interval finished");
        self.close();
      }
    }, 1000);
  };
`;

const workerScriptBlob = new Blob([workerScript]);
const workerScriptBlobUrl = URL.createObjectURL(workerScriptBlob);
const worker = new Worker(workerScriptBlobUrl);

worker.onmessage = ({ data }) => {
  console.log(data);
};
worker.postMessage({ num: 30 });
