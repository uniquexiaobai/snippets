function toBase64(url, callback) {
  var canvas = document.createElement('canvas'),
    context = canvas.getContext('2d'),
    image = new Image();

  image.crossOrigin = 'Anonymous';
  image.src = url;

  image.onload = function () {
    var w = image.naturalWidth,
      h = image.naturalHeight;

    canvas.width = w;
    canvas.height = h;

    context.drawImage(image, 0, 0);

    var base64 = canvas.toDataURL();

    callback(base64);
  };
}

toBase64('http://cdn.uniquexiaobai.cn/logo.png', console.log);
