function concat(arrBuffers, length){
	var buffer = new Buffer(length);
	var curIndex = 0;
	forEach(arrBuffers, function(buf){
		forEach(buf, function(b){
			buffer[curIndex++] = b;
		});
	});
	return buffer;
}

var buffer1 = new Buffer([1,2,3]);
var buffer2 = new Buffer([4,5,6]);

var buffer3 = concat([buffer1, buffer2], 6);
console.log(buffer3);