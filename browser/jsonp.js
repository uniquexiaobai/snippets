// jsonp
const request = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    const search = new URLSearchParams(
      Object.assign(params, { cb: 'jsonpCallback' })
    );
    const script = document.createElement('script');

    window.jsonpCallback = res => {
      document.body.removeChild(script);
      delete window.jsonpCallback;
      resolve(res);
    };

    script.src = `${url}?${search}`;
    document.body.appendChild(script);
  });
};

request('/api/jsonp', {
  a: 1,
  b: 2,
}).then(res => {
  console.log(res);
});
