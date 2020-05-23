/*
 * 观察者模式：定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖它的对象都得到通知
 */

function Product(price) {
  this.price = price;
  this.actions = [];
}

Product.prototype.register = function (observer) {
  this.actions.push(observer);
};

Product.prototype.unregister = function (observer) {
  this.actions = this.actions.filter(function (action) {
    return observer !== action;
  });
};

Product.prototype.notify = function () {
  var self = this;

  this.actions.forEach(function (action) {
    action.update(self);
  });
};

var fees = {
  update: function (product) {
    product.price = product.price * 1.2;
  },
};

var proft = {
  update: function (product) {
    product.price = product.price * 2;
  },
};

var product = new Product(100);

product.register(fees);
product.register(proft);
product.notify();

console.log(product.price); // 240
