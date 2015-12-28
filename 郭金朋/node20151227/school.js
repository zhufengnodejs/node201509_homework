var buf=new Buffer(12);
buf.write("中国");
//console.log(buf.toString());

var buf1=new Buffer([1,2,3,'a']);
console.log(buf1);
var buf2=new Buffer([4,5,6])

var newBuf=Buffer.concat([buf1,buf2],6);
console.log(newBuf);

var newBuf1=Buffer.concat([buf1,buf2],5);
console.log(newBuf1);




