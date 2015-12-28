var fs=require("fs");
function copy(src,target){
	fs.open(src,"r",function(err,fd){
		var buf=new Buffer(3);
		var pos=0;
		function read(){
			fs.read(fd,buf,0,3,pos,function(err, bytesRead){
				console.log(buf.slice(0,bytesRead).toString())
				pos+=bytesRead;
				if(bytesRead>0){
					read()
				}
				/*fs.open(target,"w",function(err,fd){
					fs.write
				})*/
			})
		}
		read()
		
	})
}
fs.open("line.txt","r",function(err,fd){
	console.log(fd)
})
fs.open("line.txt","r",function(err,fd){
	console.log(fd)
})
copy("line.txt","2.txt")