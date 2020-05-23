/*
 * 订阅-发布模式：定义了对象之间的一种一对多的依赖关系，当一个对象的状态发生变化时，所有依赖它的对象都可以得到通知
 */

var Pubsub = function () {
  var events = {};

  function on(type, handler) {
    events[type] = events[type] || [];
    events[type].push(handler);
  }

  function off(type, handler) {
    if (events[type]) {
      var index = evnets[type].indexOf(handler);

      events[type].splice(index, 1);
    }
  }

  function emit(type) {
    (events[type] || []).forEach(function (handler) {
      handler();
    });
  }

  return {
    on: on,
    off: off,
    emit: emit,
  };
};

var pubsub = Pubsub();

pubsub.on('hi', () => {
  console.log('hihihi');
});

pubsub.on('hi', () => {
  console.log('blabla');
});

pubsub.emit('hi');
// hihihi
// blabla
