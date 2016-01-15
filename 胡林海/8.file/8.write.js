/**
 * Created by Administrator on 2015/12/30.
 */
var fs=require('fs');
var buffer=new Buffer('珠峰培训');


fs.open('line.txt','w',function(err,fd){
    console.log('first',fd);
    fs.write(fd,buffer,6,6,6,function(err,bytesWritten){
        console.log("bytesWritten",bytesWritten);
        fs.write(fd,buffer,0,6,0,function(err,bytesWritten){
            fs.close(fd);
            fs.open('line.txt','w',function(err,fd){
                console.log("second",fd)
            })
        })
    })
})