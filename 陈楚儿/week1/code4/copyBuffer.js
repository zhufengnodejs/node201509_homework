var buf = new Buffer('test', 'utf8');

Buffer.prototype.copyBuffer = function(target, targetStart, sourceStart, sourceEnd){
    targetStart = targetStart || 0;
    sourceStart = sourceStart || 0;
    sourceEnd = sourceEnd || target.length;

    for(var i= sourceStart; i < sourceEnd; i++){
        target[targetStart++] == this[i];
    }
};

var bufTest = new Buffer(4);
buf.copy(bufTest);
console.log(bufTest.toString());
