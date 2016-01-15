/**
 * Created by Administrator on 2015/12/30.
 */


var Person=require("./2.Human.js");
var girl=new Person('小龙女',18);
var boy=new Person('杨过',15);


console.log(girl.getName(),girl.getAge());
console.log(boy.getName(),boy.getAge());

girl.setName('龙女');
girl.setAge(20);

console.log(girl.getName(),girl.getAge());
console.log(boy.getName(),boy.getAge());

console.log(girl.home,boy.home);
console.log(girl.hasOwnProperty('home'));
console.log(girl.home,boy.home);

Person.prototype.home="上海";
console.log(girl.home,boy.home);

console.log(Person.staticName);