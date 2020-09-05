function unique(arr) {
  return arr.reduce((acc, val) => {
    return acc.includes(val) ? acc : [...acc, val];
  }, []);
}

module.exports = unique;
