Function.prototype.mybind = function (context) {
  var self = this;
  args = Array.prototype.slice.call(arguments, 1);

  var F = function () {
    const _args = Array.prototype.slice.call(arguments);
    return self.apply(this instanceof F ? this : context, args.concat(_args));
  };

  F.prototype = Object.create(self.prototype);

  return F;
};

var obj = {
  name: 'a',
};

function print() {
  console.log(this.name);
}

obj.print = print;

print();
obj.print();

print.mybind()();
print.mybind(obj)();

function Person(name) {
  this.name = name;
}

Person.prototype.print = function () {
  console.log(this.name);
};

MyPerson = Person.mybind(obj);
var p = new MyPerson('b');

p.print();
