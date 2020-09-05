const flatten = require('./flatten');

describe('flatten', () => {
  test('can flatten arrays to a given depth', () => {
    const array = [1, [2], [[3]], [[[4]]]];

    expect(flatten(array)).toEqual(array.flat());
    expect(flatten(array, 2)).toEqual(array.flat(2));
    expect(flatten(array, Infinity)).toEqual(array.flat(Infinity));
  });
});
