function isInViewport($elem) {
  var rect = $elem.getBoundingClientRect(),
    $html = document.documentElement;

  return (
    rect.top < $html.clientHeight &&
    rect.left < $html.clientWidth &&
    rect.bottom > 0 &&
    rect.right > 0
  );
}
