Function.prototype.myCall = function (context) {
  context = context || global;
  context.func = this;

  var args = [],
    i = 1,
    len = arguments.length;
  for (; i < len; i++) {
    args.push('arguments[' + i + ']');
  }

  // eval
  var res = eval('context.func(' + args.join(',') + ')');

  delete context.func;

  return res;
};

var obj = {
  a: 1,
};
var a = 2;

function bar(name, age) {
  console.log(name);
  console.log(age);
  console.log(this.a);
}

bar.myCall(null, 'hello', 'world');
bar.myCall(obj, 'hello', 'world');
