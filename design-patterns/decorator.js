/*
 * 装饰者模式
 * https://addyosmani.com/resources/essentialjsdesignpatterns/book/
 */

function MacBook() {
  this.cost = function () {
    return 10000;
  };
  this.screenSize = function () {
    return 13.3;
  };
}

function withProMemory(macbook) {
  var v = macbook.cost();

  macbook.cost = function () {
    return v + 2000;
  };
}

var mb = new MacBook();
withProMemory(mb);

console.log(mb.cost()); // 11500
console.log(mb.screenSize()); // 13.1
