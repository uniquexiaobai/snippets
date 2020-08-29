/**
 * YY:   18, The year
 * YYYY: 2018
 * M:    1-12, The month
 * MM:   01-12
 * D:    1-31, The day of the month
 * DD:   01-31
 * d:    0-6, The day of the week, with Sunday as 0
 * H:    0-23, The hour
 * HH:   00-23
 * h:    1-12, The hour, 12-hour clock
 * hh:   01-12
 * m:    0-59, The minute
 * mm:   00-59
 * s:    0-59, The second
 * ss:   00-59
 * SSS:  000-999, The millisecond
 * A:    AM/PM
 * a:    am/pm
 */

// format(new Date(), 'YYYY-MM-DD HH:mm:ss'); // 2020-02-13 22:15:20
function format(date, formatStr) {
  const formattingTokens = /(YYYY|YY|MM?|DD?|d|HH?|hh?|mm?|ss?|SSS|A|a)/g;
  const padStartZero = (str, len = 2) => String(str).padStart(len, '0');
  const result = formatStr.replace(formattingTokens, match => {
    switch (match) {
      case 'YYYY':
        return date.getFullYear();
      case 'YY':
        return String(date.getFullYear()).slice(-2);
      case 'MM':
        return padStartZero(date.getMonth() + 1);
      case 'M':
        return `${date.getMonth() + 1}`;
      case 'DD':
        return padStartZero(date.getDate());
      case 'D':
        return `${date.getDate()}`;
      case 'd':
        return `${date.getDay()}`;
      case 'HH':
        return padStartZero(date.getHours());
      case 'H':
        return `${date.getHours()}`;
      case 'hh':
        return padStartZero(date.getHours() % 12);
      case 'h':
        return `${date.getHours() % 12}`;
      case 'mm':
        return padStartZero(date.getMinutes());
      case 'm':
        return `${date.getMinutes()}`;
      case 'ss':
        return padStartZero(date.getSeconds());
      case 's':
        return `${date.getSeconds()}`;
      case 'SSS':
        return padStartZero(date.getMilliseconds(), 3);
      case 'A':
        return date.getHours() < 12 ? 'AM' : 'PM';
      case 'a':
        return date.getHours() < 12 ? 'am' : 'pm';
      default:
        return '';
    }
  });

  return result;
}

module.exports = format;
