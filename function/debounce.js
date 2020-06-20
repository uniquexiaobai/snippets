const debounce = (func, delay, options = {}) => {
  const leading = options.leading || false;
  const trailing = options.trailing === undefined ? true : options.trailing;
  let timeout;

  return function (...args) {
    const context = this;

    if (leading && !timeout) {
      func.apply(context, args);
    }

    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }

    timeout = setTimeout(() => {
      if (trailing) {
        func.apply(context, args);
      }
      timeout = null;
    }, delay);
  };
};

module.exports = debounce;
