var fs=require('fs');

function copy(src,target){
    fs.open(src,'r',function(err,fd){
        fs.open(target,'w',function(errw,fdw){
            var pos =0;
            function read(){
                var buffer = new Buffer(3);
                fs.read(fd,buffer,0,3,pos,function(err,bytesRead){
                    if(bytesRead>0){
                        fs.write(fdw,buffer.slice(0,bytesRead),0,bytesRead,pos,function(errww,bytesWritten){
                            pos += bytesRead;
                            read();
                        });
                    }
                });
            }
            read();
        });
    });
}
copy('text1.txt','text2.txt');
