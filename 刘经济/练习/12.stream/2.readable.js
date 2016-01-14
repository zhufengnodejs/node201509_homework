/**
 * Created by Administrator on 2016/1/9.
 */
var fs = require('fs');
var rs = fs.createReadStream('./read.txt', {
    start: 0, end: 5, highWatermark: 3
})

var buffers = []
rs.on('readable', function() {
    console.log('---------llllll');
    var buff;
    while(null != (buff = rs.read(1))){
        buffers.push(buff);
    }
});

rs.on('end', function () {
    var data = Buffer.concat(buffers);
    console.log(data.toString());
})
