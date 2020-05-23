const memoize = func => {
  const cache = {};

  return (...args) => {
    if (cache[args] !== undefined) {
      return cache[args];
    } else {
      return (cache[args] = func(...args));
    }
  };
};

const fib = n => (n <= 1 ? n : fib(n - 1) + fib(n - 2));

const fib_ = memoize(fib);

console.log(fib(10));
console.log(fib_(10));
