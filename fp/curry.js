function curry(fn) {
  return function _curry(...args) {
    if (args.length >= fn.length) {
      return fn.apply(null, args);
    } else {
      return (..._args) => {
        return _curry.apply(null, args.concat(_args));
      };
    }
  };
}

const sum = (a, b, c) => a + b + c;
const sum_ = curry(sum);

console.log(sum_(2, 3, 4));
console.log(sum_(2, 3)(4));
console.log(sum_(2)(3, 4));
console.log(sum_(2)(3)(4));
