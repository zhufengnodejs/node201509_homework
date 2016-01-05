/**
 * Created by Administrator on 2015/12/30.
 */

var p=require('./1.person.js');
console.log(require.cache);
console.log(require.resolve("./1.person.js"))
delete require.cache[require.resolve('./1.person.js')]


var person=require("./1.person.js");
console.log(person.name)
person.welcome('welcome');
person.welcome('zfpx');