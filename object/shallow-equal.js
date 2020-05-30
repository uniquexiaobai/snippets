const { is } = require('./object-is');

function shallowEqual(x, y) {
  if (is(x, y)) return true;

  if (
    typeof x !== 'object' ||
    typeof y !== 'object' ||
    x === null ||
    y === null
  ) {
    return false;
  }

  const keys1 = Object.keys(x);
  const keys2 = Object.keys(y);

  if (keys1.length !== keys2.length) return false;

  for (let i = 0, len = keys1.length; i < len; i++) {
    const key = keys1[i];
    if (!Object.prototype.hasOwnProperty.call(y, key) || !is(x[key], y[key])) {
      return false;
    }
  }

  return true;
}

exports.shallowEqual = shallowEqual;
