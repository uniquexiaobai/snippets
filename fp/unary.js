function unary(func) {
  return (...args) => {
    return func(args[0]);
  };
}

module.exports = unary;
