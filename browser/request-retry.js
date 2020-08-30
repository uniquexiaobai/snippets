// 请求失败多次重试
function requestRetry(url, times, callback) {
  let curr = 0,
    result,
    error;

  function _finish() {
    curr += 1;

    if (result || curr >= times) {
      return callback(result, error);
    }

    _retry(url);
  }

  function _retry(url) {
    fetch(url)ƒ
      .then(data => {
        result = data;
      })
      .catch(err => {
        error = err;
      })
      .finally(_finish);
  }

  _retry(url);
}

requestRetry('http://localhost', 3, (result, error) => {
  console.log('done', result, error);
});
