/*
 * 单例模式：保证一个类仅有一个实例，并提供访问此实例的全局访问点
 */

var Singleton = (function () {
  var instance;

  function createInstance() {
    var object = { title: 'I am object' };

    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // true
