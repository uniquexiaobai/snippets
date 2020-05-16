Object.mycreate = function (obj) {
  var F = function () {};

  F.prototype = obj;

  return new F();
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
