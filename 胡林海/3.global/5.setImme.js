/**
 * Created by Administrator on 2015/12/29.
 */
var fs=require('fs');
fs.readFile('1.txt',function(err,data){
    console.log(data.toString());
});

setTimeout(function(){
    console.log('a扫地 setTimeout');

},0);

process.nextTick(function(){
    console.log('a扫地 nextTick');
    process.nextTick(function(){
        console.log('b扫地 nextTick2')
    })
})

setImmediate(function(){
    console.log('a扫地 setImmediate');
    setImmediate(function(){
        console.log('b扫地 setImmediate');
    })
});

//nextTick>setTimeout>setImmediate
