const format = require('./format');

describe('format', () => {
  const date = new Date('5/1/2020, 4:30:09 PM');

  test('base format', () => {
    expect(format(date, 'YYYY-MM-DD HH:mm:ss')).toBe('2020-05-01 16:30:09');
    expect(format(date, 'YY-M-D hh:m:s a')).toBe('20-5-1 04:30:9 pm');
    expect(format(date, 'SSS')).toBe('000');
  });
});
