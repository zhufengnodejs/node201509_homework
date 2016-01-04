/**
 * Created by Administrator on 2015/12/29.
 */
var name="zfpx";
exports.name=name;
console.log(this.name);


process.stdout.write('hello');

console.log(process.pid)

process.stdin.on('data',function(data){
    console.log(data.toString());
})

process.on('exit',function(){
    console.log('退出前执行');
})

