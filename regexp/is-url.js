// https://github.com/validatorjs/validator.js/blob/e501b9ce0918b1351d2779fe78b16b783a5e8c3e/validator.js#L480
const isUrl = url => {
  // https://stackoverflow.com/questions/417142/what-is-the-maximum-length-of-a-url-in-different-browsers
  if (!url || url.length >= 2083) return false;
  const reg = /^(?:http|https|ftp):\/\/.+$/;
};

module.exports = isUrl;
