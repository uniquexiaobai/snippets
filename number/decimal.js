// https://github.com/nefe/number-precision/blob/master/src/index.ts
// https://github.com/MikeMcl/decimal.js/

const toPrecision = (num, precision = 12) =>
  parseFloat(num.toPrecision(precision));

const plus = (x, y) => {
  const res = toPrecision(x + y);

  return res;
};

const minus = (x, y) => {
  const res = toPrecision(x - y);

  return res;
};

const times = (x, y) => {
  const res = toPrecision(x * y);

  return res;
};

const divide = (x, y) => {
  const res = toPrecision(x / y);

  return res;
};

exports.plus = plus;
exports.minus = minus;
exports.times = times;
exports.divide = divide;
