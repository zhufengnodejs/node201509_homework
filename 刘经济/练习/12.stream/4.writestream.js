/**
 * Created by Administrator on 2016/1/9.
 */
var fs = require('fs');
var rs = fs.createReadStream('./read.txt');
var ws = fs.createWriteStream('./write.txt', {
    aotuClose: true
});

ws.on('open', function() {
    console.log('open');
})

rs.on('data', function(data) {
    ws.write(data)
})
rs.on('end', function() {
    ws.end('end finished', function() {
        console.log('end finished')
        console.log('gong xieru$d', ws.bytesWritten)
    });
})

ws.on('close', function () {
    console.log('close')
})
