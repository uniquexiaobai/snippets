const isNumeric = require('./is-numeric');

describe('regexp/isNumeric', () => {
  const valid = ['123', '0', '-0', '+123', '123.123', '0.123'];
  const invalid = [' ', '', '.', '012', '00', '3.', '.3'];

  test('should valid numeric strings', () => {
    valid.forEach(str => {
      expect(isNumeric(str)).toBe(true);
    });
  });

  test('should invalid numeric strings', () => {
    invalid.forEach(str => {
      expect(isNumeric(str)).toBe(false);
    });
  });
});
