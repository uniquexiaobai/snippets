const { repeat, repeat1, repeat2 } = require('./repeat');

describe('string/repeat', () => {
  test('repeat', () => {
    expect(repeat('abc', 2)).toMatch('abcabc');
  });

  test('repeat1', () => {
    expect(repeat1('abc', 2)).toMatch('abcabc');
  });

  test('repeat2', () => {
    expect(repeat2('abc', 2)).toMatch('abcabc');
  });
});
