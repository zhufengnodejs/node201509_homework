var fs = require('fs');
//同步的方式把src 复制到target里
function copy(src,target){
	var fs = require('fs');
	

	fs.open(src,'r',function(err,fd){
		fs.open(target,'a',function(err,fdw){

			var pos =0;
			var num =3;
		    function read(){
		        var buffer = new Buffer(num);
		        			     //从  到  位置
		        fs.read(fd,buffer,0,num,pos,function(err,bytesRead){
		        	console.log(err,bytesRead)
		            if(bytesRead>0){
		            	console.log(buffer.slice(0,bytesRead));
		                write(buffer.slice(0,bytesRead),bytesRead);
		            }
		        });
		    }
		    function write(buffer,bytesRead){
		    	console.log(buffer);
			    fs.write(fdw,buffer,0,bytesRead,pos,function(err,bytesWritten){
			    	pos += bytesWritten;
			       read();
		    	})
		    }
		    read();    
		});
	    
	});

}

copy('1.txt','2.txt');