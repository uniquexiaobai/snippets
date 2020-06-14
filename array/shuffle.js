// Knuth-Shuffle 洗牌算法
function shuffle(arr) {
  var i = arr.length - 1,
    j,
    tmp;

  while (i > 0) {
    j = Math.floor(Math.random() * (i + 1));

    tmp = arr[j];
    arr[j] = arr[i];
    arr[i] = tmp;

    i -= 1;
  }

  return arr;
}

function shuffle1(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

exports.shuffle = shuffle;
exports.shuffle1 = shuffle1;
