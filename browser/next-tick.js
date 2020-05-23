function nextTick(func) {
  if (window.Promise) {
    // isNative
    Promise.resolve().then(func);
  } else if (window.MutationObserver) {
    var count = 1,
      textNode = document.createTextNode(String(count)),
      observer = new MutationObserver(func);

    observer.observe(textNode, { characterData: true });
    textNode.data = String(count + 1);
  } else {
    setTimeout(func);
  }
}

nextTick(function () {
  console.log('haha');
});
