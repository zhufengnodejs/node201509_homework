/**
 * Created by hejinjun on 16/1/1.
 * 4. 自己实现一遍buffer的拷贝方法
 */
var fs = require('fs');



function copy(src, target) {
    fs.open(src, 'r', function (err, fd) {
        var pos = 0;

        function read() {
            var buffer = new Buffer(3);
            fs.read(fd, buffer, 0, 3, pos, function (err, bytesRead) {
                fs.open(target, 'a', function (errw, fdw) {
                    if (bytesRead > 0) {
                        fs.write(fdw, buffer.slice(0, bytesRead), 0, bytesRead, pos, function (errww, bytesWritten) {
                            console.log('bytesWritten', bytesWritten);
                            pos += bytesRead;
                            read();
                        });
                    } else {
                        fs.fsync(fdw, function () {
                            fs.close(fdw);
                        })
                    }

                });
            });
        }

        read();
    })
}


copy('buffer1.txt','buffer2.txt');