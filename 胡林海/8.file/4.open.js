/**
 * Created by Administrator on 2015/12/30.
 */
var fs=require('fs');



var fd=fs.openSync('line.txt','r');
var buffer=new Buffer(9);

fs.readSync(fd,buffer,0,9,0);

console.log(buffer.toString());
