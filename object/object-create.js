Object.mycreate = function (proto, properties) {
  var F = function () {};

  F.prototype = proto;

  var obj = new F();

  return properties === undefined
    ? obj
    : Object.defineProperty(obj, properties);
};

var person = {
  name: 'a',
  print() {
    console.log(this.name);
  },
};

const me = Object.mycreate(person);

me.name = 'b';
me.print();
