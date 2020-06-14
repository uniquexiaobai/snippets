// https://github.com/developit/redaxios/blob/master/src/index.js

const createRequest = (defaults = {}) => {
  const request = (url, config = {}) => {
    const fetch = window.fetch;
    const options = Object.assign({}, defaults, config);
    const data = options.data;

    if (options.transformRequest) {
      //
    }

    const headers = Object.assign({}, options.headers);
    if (data && typeof data === 'object') {
      data = JSON.stringify(data);
      headers['Content-Type'] = 'application/json';
    }

    const response = {};
    response.config = config;

    return fetch(url, {
      method: options.method,
      body: data,
      headers,
    }).then(res => {
      let key;
      for (key in res) {
        if (typeof res[key] != 'function') response[key] = res[key];
      }

      if (
        !(options.validateStatus ? options.validateStatus(res.status) : res.ok)
      ) {
        return Promise.reject(response);
      }

      // stream
      return res[options.responseType || 'text']().then(data => {
        response.data = data;
        return response;
      });
    });
  };

  const createBodyMethod = method => {
    return (url, data, config) =>
      request(url, Object.assign({ method, data }, config));
  };

  const createBodyLessMethod = method => {
    return (url, config) => request(url, Object.assign({ method }, config));
  };

  request.options = createBodyLessMethod('options');
  request.get = createBodyLessMethod('get');
  request.post = createBodyMethod('post');
  request.put = createBodyMethod('put');
  request.delete = createBodyMethod('delete');

  return request;
};

module.exports = createRequest;
