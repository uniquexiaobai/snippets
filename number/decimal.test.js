const { plus, minus, times, divide } = require('./decimal');

describe('number/decimal', () => {
  test('plus', () => {
    expect(plus(0.1, 0.2)).toBe(0.3);
    expect(plus(2.3, 2.4)).toBe(4.7);
  });

  test('minus', () => {
    expect(minus(1.0, 0.9)).toBe(0.1);
  });

  test('times', () => {
    expect(times(3, 0.3)).toBe(0.9);
    expect(times(0.362, 100)).toBe(36.2);
  });

  test('divide', () => {
    expect(divide(1.21, 1.1)).toBe(1.1);
  });
});
