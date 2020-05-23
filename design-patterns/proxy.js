/*
 * 代理模式：为一个对象提供一种代理以方便对它的访问
 */

function Car() {
  this.drive = function () {
    return 'driving';
  };
}

function CarProxy(driver) {
  this.drive = function () {
    if (driver.age < 18) return 'too young to drive';

    return new Car().drive();
  };
}

function Driver(age) {
  this.age = age;
}

var driver = new Driver(28),
  kid = new Driver(15);

var car = new CarProxy(driver);
console.log(car.drive()); // 'driving';

car = new CarProxy(kid);
console.log(car.drive()); // 'too young to drive';
