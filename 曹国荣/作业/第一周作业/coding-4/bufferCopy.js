var buf = new Buffer('ddjjh', 'utf8');

Buffer.prototype.bufCopy = function(targetBuffer, targetStart, sourceStart, sourceEnd) {
    targetStart = targetStart || 0;
    sourceStart = sourceStart || 0;
    sourceEnd = sourceEnd || targetBuffer.length;

    for (var i = sourceStart; i < sourceEnd; i++) {
        targetBuffer[targetStart++] = this[i];
    }
    
};

var buf2 = new Buffer(5);

buf.copy(buf2);
console.log(buf2.toString());
