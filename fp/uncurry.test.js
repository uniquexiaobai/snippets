const uncurry = require('./uncurry');

describe('fp/uncurry', () => {
  test('same output', () => {
    const add_ = a => b => c => a + b + c;
    const add = uncurry(add_);
    const result = add_(3)(4)(5);

    expect(add(3, 4, 5)).toEqual(result);
  });
});
