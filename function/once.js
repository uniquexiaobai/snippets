function once(func) {
  var executed = false;

  return function () {
    if (!executed) {
      executed = true;
      func.apply(this, arguments);
    }
  };
}
