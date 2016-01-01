Buffer.prototype.copy1 = function (targetBuffer, targetStart, sourceStart, sourceEnd) {
    var len = targetBuffer.length;

    if(targetStart >= targetBuffer.length)
        throw new Error('targetStart out of index');
    if(sourceStart >= this.length)
        throw new Error('sourceStart out of index');
    if(sourceEnd >= this.length)
        throw new Error('sourceEnd out of index');

    var tmpBuffer = this.slice(sourceStart, sourceEnd);
    tmpBuffer.forEach(function (buf) {
        targetBuffer[targetStart++] = buf;
    });
    targetBuffer.slice(0, len);
};

var buffer = new Buffer([97, 98, 99, 100, 101]);
var buffer1 = new Buffer([102, 103, 104]);
buffer.copy1(buffer1, 1, 0, 2);
console.log(buffer1);




