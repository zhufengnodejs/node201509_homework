var fs = require('fs');


//同步的方式把src 复制到target里
function copy(src, target) {
    var pos = 0;
    console.log('test');
    fs.open(src, 'r', function (err, fd) {
        var buffer = new buffer(3);
        var flag = 0;
        console.log('第0次', flag);
        read();
        function read() {
            fs.read(fd, buffer, 0, 3, pos, function (err, bytesread) {
                console.log('第一次', flag);
                if (bytesread > 0) {
                    fs.open(target, 'a', function (err, fdwrite) {
                        fs.write(fdwrite, buffer, 0, 3, pos, function (err) {
                            pos += bytesread;
                            fs.close(fdwrite);
                            console.log('第2次', flag);
                        })
                    });
                    read();
                }
                else {
                }
            });
        }
    });
}
copy('line.txt', '2.txt');