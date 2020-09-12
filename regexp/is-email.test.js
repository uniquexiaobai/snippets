const isEmail = require('./is-email');

describe('isEmail', () => {
  test('should valid email', () => {
    expect(isEmail('foo@bar.co')).toBe(true);
    expect(isEmail('foo.bar@baz.co')).toBe(true);
    expect(isEmail('foo@bar.c')).toBe(false); // LD must be at least 2 chars
    expect(isEmail('foo@bar')).toBe(false);
    expect(isEmail('bar.co')).toBe(false);
  });
});
