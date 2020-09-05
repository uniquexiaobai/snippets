const unique = require('./unique');

describe('unique', () => {
  test('can find the unique values of an array', () => {
    const array = [1, 2, 3, NaN, +0, 0, -0, NaN, 3, 2, 1];
    const result = [...new Set(array)];

    expect(unique(array)).toEqual(result);
  });
});
