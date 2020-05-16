function allPass(preds) {
  return function (value) {
    return preds.every(function (pred) {
      return pred(value);
    });
  };
}
