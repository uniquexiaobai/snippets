function compose(...fns) {
  return arg => {
    return fns.reduceRight((_arg, fn) => {
      return fn(_arg);
    }, arg);
  };
}

const double = n => n * 2;
const inc = n => n + 1;

compose(console.log, inc, double)(5);
