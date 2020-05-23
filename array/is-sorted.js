function isSorted([x, ...xs]) {
  return x === undefined || (x <= Math.min(...xs) && isSorted(xs));
}

function isSorted2(xs) {
  return xs.every((v, i) => !i || v >= xs[i - 1]);
}

const nums = Array.from({ length: 3 }, () => ~~(Math.random() * 3));

console.log(nums);
console.log(isSorted(nums) === isSorted2(nums));
