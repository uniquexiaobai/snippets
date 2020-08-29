// https://github.com/developit/redaxios/blob/master/src/index.js

const createRequest = function create(defaults = {}) {
  const request = (url, config = {}) => {
    const fetch = window.fetch;
    const options = Object.assign({}, defaults, config);
    const headers = Object.assign({}, options.headers);
    let data = options.data;

    (options.transformRequest || []).forEach(f => {
      data = f(data, options.headers) || data;
    });

    if (data && typeof data === 'object') {
      data = JSON.stringify(data);
      headers['Content-Type'] = 'application/json';
    }

    if (options.baseURL) {
      url = new URL(url, options.baseURL) + '';
    }

    if (options.params) {
      const divider = ~url.indexOf('?') ? '&' : '?';
      const query = options.paramsSerializer
        ? options.paramsSerializer(options.params)
        : new URLSearchParams(options.params);
      url += divider + query;
    }

    const response = {};
    response.config = config;

    return fetch(url, {
      method: options.method,
      body: data,
      headers,
      credentials: options.withCredentials ? 'include' : undefined,
    }).then(res => {
      for (const key in res) {
        if (typeof res[key] !== 'function') response[key] = res[key];
      }

      const ok = options.validateStatus
        ? options.validateStatus(res.status)
        : res.ok;
      if (!ok) return Promise.reject(response);

      if (options.responseType === 'stream') {
        response.data = res.body;
        return response;
      }

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
  request.delete = createBodyLessMethod('delete');

  request.post = createBodyMethod('post');
  request.put = createBodyMethod('put');
  request.patch = createBodyMethod('patch');

  request.create = create;

  return request;
};

module.exports = createRequest();
