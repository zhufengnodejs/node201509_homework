var fs = require('fs');
//同步的方式把src 复制到target里
function copy(src,target){
    fs.open(src,'r',function(err,fd){
        fs.open(target,'w',function(err,fd2))
        function readAndWrite(){
            fs.read(fd,new Buffer(3),0,3,0,function(err, bytesRead, buffer){
                console.log(bytesRead,buffer)
            })
        }
        readAndWrite();
    })
}

copy('line.txt','2.txt');