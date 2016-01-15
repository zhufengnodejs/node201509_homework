var util = require('util');
function Base(){
	this._events = {};
}
Base.prototype.on = function(event, cb){
	//console.log(this);
	if(this._events[event]){
		this._events[event].push(cb);
	}
	else{
		this._events[event] = [cb];
	}
}
Base.prototype.emit = function(event){

	var args = Array.prototype.slice.call(arguments, 1);
	var callbacks = this._events[event];
	console.log();
	var self = this;
	callbacks.forEach(function(cb){
		cb && cb.apply(self, args);
	})
}
Base.prototype.off = function(event, cb){
	this._events[event] = this._events[event].filter(function(index){
		return cb != index; 
	})
}
Base.prototype.once = function(event, cb){
	function oncecb(arguments){
		cb.apply(this, arguments);
		this.off(event, oncecb);
	}
	this.on(event,oncecb);
}
function Persion(name){
	Base.call(this);
	this.name = name;

}
util.inherits(Persion, Base);
var Lilei = new Persion('LiLei');

Lilei.on('eat', function(){
	console.log('baole');
})
Lilei.once('hi', function(){
	console.log('hi');
})
Lilei.emit('eat');
Lilei.emit('hi');
Lilei.emit('hi');
