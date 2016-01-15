var Writeable = require('stream').Writeable;
var util = require('util');
var fs = require('fs');
function Counter(options) {
    Readable.call(this,options);
    this._index = 0;
    this._max = options.max;
}
util.inherits(Counter, Readable);
