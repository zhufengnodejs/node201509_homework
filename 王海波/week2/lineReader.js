var Emitter = require('events'),
    util = require('util'),
    fs = require('fs');

var RETURN = 0x0d,
    NEWLINE = 0x0a;

util.inherits(LineReader, Emitter);

function LineReader(path) {
    this._rs = fs.createReadStream(path);
}

LineReader.prototype.setEncoding = function (encoding) {
    if(Buffer.isEncoding(encoding)) {
        this._encoding = encoding;
    }
};

LineReader.prototype.parser = function (buff) {
    if(this._encoding) {
        return buff.toString(this._encoding);
    }

    return buff;
};

LineReader.prototype.on('newListener', function (eventName, callback) {
    if(eventName == 'newLine') {
        var row = [],
            self = this,
            buff;

        this._rs.on('readable', function () {
            while(null != (buff = this.read(1))) {
                if((buff[0] == RETURN && this.read(1)) || buff[0] == NEWLINE) {
                    var currLine = Buffer.concat(row);
                    self.emit('newLine', null, self.parser(currLine));
                    row.length = 0;
                } else {
                    row.push(buff);
                }
            }
        });
    }
});

var lineReader = new LineReader('test.txt');
lineReader.setEncoding('utf8');
lineReader.on('newLine', function (err, data) {
    if(!err) {
        console.log(data);
    }
});




