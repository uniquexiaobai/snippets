const { getMonthDays, getMonthDays1 } = require('./get-month-days');

describe('date/getMonthDays', () => {
  test('getMonthDays', () => {
    expect(getMonthDays(2000, 2)).toBe(29);
    expect(getMonthDays(2001, 2)).toBe(28);
    expect(getMonthDays(2000, 1)).toBe(31);
    expect(getMonthDays(2001, 3)).toBe(31);
    expect(getMonthDays(2000, 4)).toBe(30);
  });

  test('getMonthDays1', () => {
    expect(getMonthDays1(2000, 2)).toBe(29);
    expect(getMonthDays1(2001, 2)).toBe(28);
    expect(getMonthDays1(2000, 1)).toBe(31);
    expect(getMonthDays1(2001, 3)).toBe(31);
    expect(getMonthDays1(2000, 4)).toBe(30);
  });
});
