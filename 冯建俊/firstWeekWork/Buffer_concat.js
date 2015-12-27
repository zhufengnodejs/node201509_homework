var buf1=new Buffer([1,2,3]);
var buf2=new Buffer([4,5,6]);
var buf3=new Buffer([7,8,9])
var buf=Buffer.concat([buf1,buf2],6);
console.log(buf.length);
function concat(lists){
	var length=0;
	var result=new Buffer(length);
	lists.forEach(function(list){
		var newResult=new Buffer(length+list.length);
		result.copy(newResult,0,0,result.length);
		list.copy(newResult,length,0,list.length)
		length+=list.length;
		result=newResult;
	})

	return result;

}
var buf4=concat([buf1,buf2,buf3])
console.log(buf4)