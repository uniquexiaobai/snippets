function batch(func) {
  return function () {
    var target = arguments[0],
      args = Array.prototype.slice.call(arguments, 1);

    if (target.length) {
      return Array.prototype.map.call(target, function (item) {
        return func.apply(null, [item].concat(args));
      });
    } else {
      return func.apply(null, [target].concat(args));
    }
  };
}
