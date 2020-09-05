function flatten(arr, depth = 1) {
  if (depth <= 0) return arr;

  return arr.reduce((acc, item) => {
    const curr = Array.isArray(item) ? flatten(item, depth - 1) : [item];

    return acc.concat(curr);
  }, []);
}

module.exports = flatten;
