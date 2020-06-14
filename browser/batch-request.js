// 同时发送多个请求
function batchRequest(urls, max, callback) {
  var count = 0,
    curr = Math.min(max, urls.length),
    result = [],
    error = [];

  function _finish() {
    count += 1;
    if (count >= urls.length) return callback(result);

    if (curr < urls.length) {
      _fetch(curr++);
    }
  }

  function _fetch(n) {
    fetch(urls[n])
      .then(res => res.json())
      .then(data => {
        console.log('$', n, data);
        result[n] = data;
      })
      .catch(err => {
        error[n] = err;
      })
      .finally(_finish);
  }

  for (var i = 0; i < curr; i++) {
    _fetch(i);
  }
}

var urls = Array.from({ length: 10 }, () => `https://bing-api.lokibai.com/`);

sendRequest(urls, 5, function (result) {
  console.log('done', result);
});
