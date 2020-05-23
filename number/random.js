// [start, end)
const random = (start, end) =>
  Math.floor(Math.random() * (end - start)) + start;

exports.random = random;
