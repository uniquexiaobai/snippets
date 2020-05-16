function pathOr(object, paths, defaultValue) {
  var value = object,
    index = 0;

  while (index < paths.length) {
    if (value == null) return defaultValue;
    value = value[paths[index++]];
  }

  return value == null ? defaultValue : value;
}
