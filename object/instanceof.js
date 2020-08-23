function myInstanceof(target, origin) {
  var prototype = target.__proto__;

  if (!prototype) return false;

  if (prototype === origin.prototype) return true;

  return myInstanceof(prototype, origin);
}

function Person(name) {
  this.name = name;
}

var p = new Person('loki');
var o = Object.create(null);

console.log(myInstanceof(p, Person));
console.log(myInstanceof(p, Object));
console.log(myInstanceof(Person, Function));
console.log(myInstanceof(Object, Function));
console.log(myInstanceof(Function, Object));
console.log(myInstanceof(Function, Function));
console.log(myInstanceof(o, Object));
