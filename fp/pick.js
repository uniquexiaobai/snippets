function pick(keys, object) {
  var result = {},
    index = 0;

  while (index < keys.length) {
    if (keys[index] in object) {
      result[keys[index]] = object[keys[index]];
    }
    index += 1;
  }

  return result;
}
