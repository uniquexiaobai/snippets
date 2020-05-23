function randomId(possible, len) {
  var ret = '',
    i;

  for (i = 0; i < len; i++) {
    ret += possible[Math.floor(Math.random() * possible.length)];
  }

  return ret;
}

function randomId1() {
  return Math.random().toString(36).slice(2);
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;

    return v.toString(16);
  });
}

console.log(randomId('0123456789abcdef', 32));
console.log(randomId1());
console.log(uuidv4());
