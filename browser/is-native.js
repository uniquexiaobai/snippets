function isNative(func) {
  return typeof func === 'function' && /\[native code\]/.test('' + func);
}

exports.isNative = isNative;
