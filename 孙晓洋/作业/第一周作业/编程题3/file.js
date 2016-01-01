var fs = require('fs');

/*
* 第一种同步读取
* */
var content = fs.readFileSync('data.txt','utf8');
//console.log(content);

/**
 *第二种异步读取
 * */
fs.readFile('data.txt','utf8',function(err,data){
   // console.log(data);
});


/*
* 第三种
* */
var list = [];
fs.open('data.txt','r',function(err,fd){
    var pos =0;
    function read(){
        var buffer = new Buffer(1024);
        fs.read(fd,buffer,0,3,pos,function(err,bytesRead){
            list.push(buffer.slice(0,bytesRead));
            pos += bytesRead;
            if(bytesRead>0)
                read();
            else{
                var result = Buffer.concat(list);
                console.log(result.toString());
            }
        });
    }
    read();
});