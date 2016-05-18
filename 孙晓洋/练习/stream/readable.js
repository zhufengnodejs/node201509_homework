var fs = require('fs');
var Writable = require('stream').Writable;
var util = require('util');
util.inherits(ConsoleStream, Writable);

function ConsoleStream(path){
    this._path = path;
    Writable.call(this);
}

ConsoleStream.prototype._write = function(data,encoding,callback){
    console.log(data.toString());
   // fs.open(this._path,'a',function(errw,fd){
       // fs.write(fd,data,0,data.length);
    //});
    callback();
}

var zf = new ConsoleStream('./test.txt');
zf.write('珠峰','utf8',function(){
    console.log('珠峰写入完毕');
    zf.write('培训','utf8',function(){
        console.log('培训写入完毕');
    });
});
