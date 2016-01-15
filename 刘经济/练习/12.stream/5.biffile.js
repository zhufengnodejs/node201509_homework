var fs = require('fs');
var rs = fs.createReadStream('./node-v4.0.0.tar.gz');
var ws = fs.createWriteStream('./write.txt',{
    highWaterMark: 2
});

rs.on('data', function(data) {
    var flag = ws.write(data);
    console.log(flag);;
})

ws.on('drain', function () {
    console.log('drain');
})