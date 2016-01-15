/**
 * Created by dell-bo on 2015/12/27.
 */
var fs=require('fs');
function copy(src,target){
    fs.openSync(src,'r',function(err,fd){
        var pos =0;
        function read(){
            var buffer = new Buffer(3);
            fs.readSync(fd,buffer,0,3,pos,function(err,bytesRead){
                console.log(buffer)
                fs.openSync(target,'w',function(err,wfd){
                    fs.writeSync(wfd,buffer,0,bytesRead,0,function(err,bytesWrite){

                    })
                })
                pos += bytesRead;
                if(bytesRead>0)
                    read();
            });
        }
        read();
    });
}
copy('./src.text','./tar.text');