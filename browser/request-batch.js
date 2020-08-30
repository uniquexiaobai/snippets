// 可控制并发数的批量请求
function requestBatch(urls, limit, callback) {
  const len = urls.length,
    pending = [],
    result = [],
    error = [];
  let curr = 0;

  function _finish() {
    curr += 1;
    if (curr >= len) return callback(result, error);

    if (!pending.length) return;

    _fetch(pending.shift());
  }

  function _fetch(n) {
    fetch(urls[n])
      .then(res => res.json())
      .then(data => {
        result[n] = data;
      })
      .catch(err => {
        error[n] = err;
      })
      .finally(_finish);
  }

  for (let i = 0; i < len; i++) {
    if (i >= limit) {
      pending.push(i);
    } else {
      _fetch(i);
    }
  }
}

const urls = Array.from({ length: 10 }, () => `https://bing-api.lokibai.com/`);

requestBatch(urls, 3, function (result, error) {
  console.log('done', result, error);
});
