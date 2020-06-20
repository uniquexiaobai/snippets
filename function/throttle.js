const throttle = (func, delay) => {
  let lastTime;
  let timeout;

  return function (...args) {
    const now = Date.now();
    const context = this;

    if (lastTime && now - lastTime < delay) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }

      timeout = setTimeout(() => {
        lastTime = now;
        func.apply(context, args);
        timeout = null;
      }, delay);
    } else {
      lastTime = now;
      func.apply(context, args);
    }
  };
};

module.exports = throttle;
