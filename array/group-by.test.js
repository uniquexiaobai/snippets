const groupBy = require('./group-by');

describe('array/groupBy', () => {
  test('should transform keys by `iteratee`', () => {
    const array = [6.1, 4.2, 6.3];
    expect(groupBy(array, Math.floor)).toEqual({ '4': [4.2], '6': [6.1, 6.3] });
  });
});
