function timeAgo(timestamp) {
  var arr = [
      1000, // 1 * 1000
      60000, // 60 * 1000,
      3600000, // 60 * 60 * 1000,
      86400000, // 24 * 60 * 60 * 1000,
      604800000, // 7 * 24 * 60 * 60 * 1000,
      2592000000, // 30 * 24 * 60 * 60 * 1000,
      31104000000, // 12 * 30 * 24 * 60 * 60 * 1000,
    ],
    text = ['秒前', '分钟前', '小时前', '天前', '周前', '月前', '年前'],
    duration = Date.now() - timestamp;

  for (var i = arr.length - 1; i >= 0; i--) {
    if (duration > arr[i]) {
      return ~~(duration / arr[i]) + text[i];
    }
  }

  return '刚刚';
}

console.log(timeAgo(new Date().get));
