/**
 * Created by Administrator on 2015/12/30.
 */
var EventEmitter=require('events');
var util=require('util');


function Bell(name){
    this.name=name;
}

util.inherits(Bell,EventEmitter);

var jingleBell=new Bell('jingle');
jingleBell.on('ring',function(){
    console.log('收到礼物1')
});

jingleBell.on('ring',function(){
    console.log('收到礼物2');;
});

jingleBell.on('ring',function(){
    console.log('收到礼物3');
});
var drop=function(who){
    console.log(who,'铃铛丢了')
}

jingleBell.once('drop',drop);
jingleBell.emit('ring');


jingleBell.emit('drop','鹿');
jingleBell.emit('drop','老人');

console.log(jingleBell.listeners('ring'));
console.log(jingleBell.listenerCount('ring'));




