const curry = require('./curry');

describe('fp/curry', () => {
  test('same output', () => {
    const add = (a, b, c) => a + b + c;
    const add_ = curry(add);
    const result = add(3, 4, 5);

    expect(add_(3, 4, 5)).toEqual(result);
    expect(add_(3, 4)(5)).toEqual(result);
    expect(add_(3)(4, 5)).toEqual(result);
    expect(add_(3)(4)(5)).toEqual(result);
  });
});
