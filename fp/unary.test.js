const unary = require('./unary');

describe('fp/unary', () => {
  test('turns multiple-argument function into unary one', () => {
    unary((x, y, z) => {
      expect(x).toEqual(3);
      expect(y).toEqual(undefined);
      expect(z).toEqual(undefined);
    })(3, 4, 5);
  });
});
