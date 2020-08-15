function uncurry(func) {
  return (...args) => {
    return args.reduce((curry, arg) => curry(arg), func);
  };
}

module.exports = uncurry;
