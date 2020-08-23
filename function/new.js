function myNew() {
  var func = arguments[0],
    args = Array.prototype.slice.call(arguments, 1),
    obj = {},
    res;

  obj.__proto__ = func.prototype;
  res = func.apply(obj, args);

  if (res != null && typeof res === 'object') {
    return res;
  }
  return obj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.printName = function () {
  console.log(this.name);
  console.log(this.__proto__);
};

var p = myNew(Person, 'loki', 22);
console.log(p, p instanceof Person);
p.printName();

function Test() {
  return [2, 3];
}
var t = myNew(Test);
console.log(t);
