var fs=require('fs');
var rs=fs.createReadStream('./read.txt',{start:0,end:4});


rs.on('end',function(){
    console.log('读取完成');

})
rs.on('data',function(data){
    console.log(data.toString());
})

