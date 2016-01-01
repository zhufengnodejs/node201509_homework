
var buf=new Buffer('123456');
var b = buf.toString('base64');
console.log(b);

var c = new Buffer(b.toString(), 'base64')
var d = c.toString();
console.log(d);
