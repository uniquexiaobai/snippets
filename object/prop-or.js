function propOr(object, prop, defaultValue) {
  var value = object && object[prop];

  return value == null ? defaultValue : value;
}
