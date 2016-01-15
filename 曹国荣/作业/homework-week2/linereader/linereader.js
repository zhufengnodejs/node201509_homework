var fs = require('fs');
var EventEmitter = require('events');
var util = require('util');
function LineReader(path) {
    this._rs = fs.createReadStream(path);
}
var RETURN = 0x0d; // \r回车
var NEWLINE = 0x0a; // \n换行

util.inherits(LineReader, EventEmitter);
LineReader.prototype.setEncoding = function (encoding) {
    if (Buffer.isEncoding(encoding)) {
        this._encoding = encoding;
    }
};
LineReader.prototype.parse = function (buf) {
    if (this._encoding) {
        return buf.toString(this._encoding);
    }
    return buf;
};
LineReader.prototype.on('newListener', function (eventName, callback) {
    // 当注册新的事件时, 会触发newListener
    if (eventName == 'newLine') {
        var row = [];
        var self = this;
        this._rs.on('readable', function () {
            while (null != (buff = this.read(1))) {
                if (buff[0] == RETURN) {
                    this.read(1);
                    var curr = Buffer.concat(row);
                    self.emit('newLine', self.parse(curr));
                    row.length = 0;
                } else {
                    row.push(buff);
                }
            }
        });
        this._rs.on('end', function () {
            if (row.length > 0) {
                self.emit('newLine', self.parse(Buffer.concat(row)));
            }
            self.emit('end');
        });
    }
})


var lineReader = new LineReader('./index.txt');
lineReader.on('newLine', function (row) {
    console.log(row.toString());
});
lineReader.on('end', function () {
    console.log('end');
});