function groupBy(list, func) {
  return list.reduce((map, curr) => {
    const key = func(curr);
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(curr);
    return map;
  }, {});
}

module.exports = groupBy;
