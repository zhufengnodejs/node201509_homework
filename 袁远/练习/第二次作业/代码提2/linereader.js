var fs = require('fs');
var EventEmitter = require('events');
var util = require('util');
function lineReader(path){
	this._rs = fs.createReadStream(path);
}
