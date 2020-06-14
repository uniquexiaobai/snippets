const isNumeric = str => {
  const reg = /^[+-]?(?:\d|[1-9]\d+|\d+\.\d+)$/;

  return reg.test(str);
};

module.exports = isNumeric;
