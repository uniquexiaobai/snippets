function flip(func) {
  return function (a, b) {
    return func(b, a);
  };
}
