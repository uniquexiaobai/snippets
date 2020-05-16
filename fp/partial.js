function partial(func) {
  var args = Array.prototype.slice.call(arguments, 1);

  return function () {
    var moreArgs = Array.prototype.slice.call(arguments);

    return func.apply(null, args.concat(moreArgs));
  };
}
