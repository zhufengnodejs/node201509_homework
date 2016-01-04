/**
 * Created by Administrator on 2015/12/31.
 */

var fs=require("fs");
//fs.mkdir('test/test/test',function(err){
//    if(err)
//        console.log(err)
//});


function makeP(path){
    var paths=path.split('/');
    console.log(paths);
    for(var i=0;i<paths.length;i++){
        var curr=paths.slice(0,i+1).join("/");
        var exits=fs.existsSync(curr);
        if(exits){
            var stat=fs.statSync(curr);
            if(stat.isFile()){
                throw Error('路径中存在文件');
            }
        }else{
            fs.mkdirSync(curr);
        }
    }
}

makeP('text/text/text',function(err){
    if(err)
        console.log(err)
})


fs.stat('3.txt',function(err,data){
    console.log(data);
})


//fs.rename('./3.txt','4.txt');
//fs.stat('./4.txt',function(err,stat){
//    console.log(stat.size);
//    fs.truncate('./4.txt',3,function(){
//        fs.stat('./4.txt',function(err,stat){
//            console.log(stat.size);
//        })
//    });
//})
fs.rmdir('test');