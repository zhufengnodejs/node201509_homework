/**
 * Created by Administrator on 2015/12/30.
 */
var EventEmitter=require('events');

console.log(EventEmitter)
var eve=new EventEmitter;
var fs=require('fs');


var person={};

eve.on('data',out);

fs.readFile('name.txt','utf-8',function(err,data){
    person.name=data;
    eve.emit('data');
})

fs.readFile('age.txt','utf-8',function(err,data){
    person.age=data;
    eve.emit('data');
})

function out(){
    if(person.name&&person.age)
        console.log(person.name,person.age);
}