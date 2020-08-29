// https://gist.github.com/paullewis/55efe5d6f05434a96c36
// https://github.com/wikimedia/mediawiki/blob/master/resources/src/startup/mediawiki.requestIdleCallback.js
function requestIdleCallback(callback) {
  return setTimeout(function () {
    var start = Date.now();

    callback({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      },
    });
  });
}
