function getMonthDays(year, month) {
  function isLeapYear(year) {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
  }

  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 12:
      return 31;
    case 4:
    case 6:
    case 9:
    case 10:
    case 11:
      return 30;
    case 2:
      return isLeapYear(year) ? 29 : 28;
    default:
      return 'valid';
  }
}

function getMonthDays1(year, month) {
  return new Date(year, month, 0).getDate();
}

exports.getMonthDays = getMonthDays;
exports.getMonthDays1 = getMonthDays1;
