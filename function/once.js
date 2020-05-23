function once(func) {
  var isExecuted = false;

  return function () {
    if (!isExecuted) {
      isExecuted = true;
      func.apply(null, arguments);
    }
  };
}

exports.once = once;
