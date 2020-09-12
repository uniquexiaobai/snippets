// https://github.com/haizlin/h-regular

function isEmail(str) {
  return /^[^@]+@\w+(\.\w+)+\w$/.test(str);
}

module.exports = isEmail;
