function curry(func) {
  return function next(...args) {
    if (args.length < func.length) {
      return (..._args) => next(...args, ..._args);
    }
    return func(...args);
  };
}

module.exports = curry;
