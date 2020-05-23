const { pathOr } = require('./path-or');

test('object/pathOr', () => {
  const obj = { a: { b: 2 } };

  expect(pathOr(obj, ['a', 'b'])).toBe(2);
  expect(pathOr(obj, ['a', 'c'])).toBeUndefined();
  expect(pathOr(obj, ['a', 'c'], 3)).toBe(3);
});
