const range = (start, end, step = 1) => {
  const output = [];

  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
};

range(3); // [0, 1, 2]
range(3, 6); // [3, 4, 5]
range(3, 8, 2); // [3, 5, 7]

exports.range = range;
