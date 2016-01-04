/**
 * Created by Administrator on 2015/12/29.
 */
var util=require('util');
function Parent(){
    this.name='parent';
    this.age=8;
    this.say=function(){
        console.log('hello'+this.name);
    }
}

Parent.prototype.showName=function(){
    console.log(this.name);
}

function Child(){
    this.name="child";
}
util.inherits(Child,Parent);

var child=new Child();

//this.showName();
console.log(child.__proto__.__proto__==Parent.prototype)


function Person(){
    this.name='zfpx';
    this.parent={
        name:'parent'
    }
}

Person.prototype.toString=function(){
    console.log('this is',this.name)
};

var p=new Person();
p.toString();


console.log(util.inspect(p,true,1,true));

var arr1=[1,2];
var arr2=[3,4];
console.log(arr1.concat(arr2))
Array.prototype.push.apply(arr1,arr2);
//arr1.push(3);
//arr1.push(4);
console.log(arr1);


console.log(util.isArray([]));
console.log(util.isDate("2015年3月"));
console.log(util.isRegExp(/^\d+/))