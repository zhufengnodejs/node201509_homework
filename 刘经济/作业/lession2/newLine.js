var fs = require('fs');
var EventEmitter = require('events').EventEmitter;
var util = require('util');
///r/n 0x0d 0x0a
var RETURN= 0x0d; // ascii \r       十六进制的d就等于十进制的13  回车 return 移动光标到该行的起始位置
var NEWLINE = 0x0a; // ascii  \n   十六进制的a等于十进制的10 换行 newline 换行至下一行行首起始位置

function LineReader(path){
    this._rs = fs.createReadStream(path);
}
util.inherits(LineReader,EventEmitter);

LineReader.prototype.on('newListener',function(name,func){
    if(name === 'newLine') {
        var self = this;
        var buffers = []
        this._rs.on('readable', function(data) {
            var first = false, sec = false;
            var buf;
            while(null != (buf = self._rs.read(1))) {
                if(buf[0] == NEWLINE) {
                    func(buffers.join(''));
                    buffers = [];
                } else {
                    buffers.push(buf);
                }
            }

            if(buffers.length) {
                func(buffers.join(''));
            }

        })
    }
});

var reader = new LineReader('./read.txt');
reader.on('newLine',function(data){
    console.log('newLine:' + data);
});
reader.on('end',function(){
    console.log('end');
});