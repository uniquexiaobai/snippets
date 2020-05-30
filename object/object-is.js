// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is
const is = (x, y) => {
  if (x === y) {
    // +0 !== -0
    return x !== 0 || 1 / x === 1 / y;
  } else {
    // NaN === NaN
    return x !== x && y !== y;
  }
};

exports.is = is;
