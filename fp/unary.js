function unary(func) {
  return function () {
    return func.call(null, arguments[0]);
  };
}
