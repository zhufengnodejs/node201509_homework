var eventEmitter = require('events');
var util=require("util");
function events(){

}
util.inherits(events,eventEmitter);
function sayName(){
	console.log("xiaoming")
}
function sayAge(){
	console.log(18)
}
var event=new events();
event.on("say",sayName)
event.once("say",sayAge)
event.emit("say");
event.emit("say");
event.removeAllListeners("say");
event.emit("say");