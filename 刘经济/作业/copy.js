/**
 * Created by Administrator on 2016/1/7.
 */
var fs = require('fs');
var buffer = new Buffer(12);
var list = [];
//fs.open('src.txt', 'r', function(err, fd) {
//    var pos = 0;
//    function read() {
//        var buffer = new Buffer(2);
//        fs.read(fd, buffer, 0, 2, pos, function(err, bytesRead) {
//            pos += bytesRead;
//            list.push(buffer.slice(0, bytesRead));
//            if(bytesRead == 0) {
//                console.log(list.join('').toString());
//            } else {
//                read()
//            }
//
//        })
//    }
//    read();
//})
copy('src.txt', 'test1.txt')
function copy(src, dest) {
    fs.open(src, 'r', function(err, fd) {
        var pos = 0;
        fs.open(dest, 'w', function(err, fd2) {
            function read() {
                var buffer = new Buffer(2);
                fs.read(fd, buffer, 0, 2, pos, function(err, bytesRead) {
                    pos += bytesRead;
                    if(bytesRead > 0) {
                        fs.write(fd2, buffer, 0, bytesRead, pos, function(err, written,buf) {
                            console.log(buf.toString());
                            read();
                        })
                    }
                })
            }
            read()
        })

    })
}