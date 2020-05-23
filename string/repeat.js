function repeat(str, n) {
  return Array(n + 1).join(str);
}

function repeat1(str, n) {
  return Array.from({ length: n }, () => str).join('');
}

function repeat2(str, n) {
  return str.repeat(n);
}

exports.repeat = repeat;
exports.repeat1 = repeat;
exports.repeat2 = repeat;
