var fs = require('fs');
var util = require('util');
var EventEmitter = require('events');
var StringDecoder = require('string_decoder').StringDecoder;
var decoder1 = new StringDecoder();
var RETURN = 0x0d;
var NEWLINE = 0x0a;
function LineReader(path) {
    this._rs = fs.createReadStream(path);
}

util.inherits(LineReader, EventEmitter);

LineReader.prototype.on('newListener', function (name, fn) {
    var self = this;

    var buffs = [];

    if (name == "newLine") {

        this._rs.on('readable', function (data) {
            var buff;
            while (null != (buff = self._rs.read(1))) {
                ///判断是否读到空格

                if (buff[0] == RETURN) {
                    self._rs.read(1);
                    self.emit('newLine', Buffer.concat(buffs));
                    buffs.length = 0;
                }
                else//如果没有读到结束，就继续读
                {
                    buffs.push(buff);
                }
            }

        });
        ///读到没有数据的话。跳出后，发现buff里还有值，就说明最后一行。调用end方法
        this._rs.on('end', function () {
            if (buffs.length > 0) {
                self.emit('newLine', Buffer.concat(buffs));
            }
            self.emit('end');
        });
    }

    if (name == 'end') {

    }

});

var lineread = new LineReader('./Test.txt');
lineread.on('newLine', function (data) {
    if (data) {
        console.log(decoder1.write(data));
    }
});

lineread.on('end', function (data) {
    if (data) {
        console.log(decoder1.write(data));
    }
});


