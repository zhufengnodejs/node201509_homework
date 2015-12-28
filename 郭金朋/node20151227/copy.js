var fs=require("fs");

function copy(srcUrl,tarUrl){
    if(!srcUrl)return
    if(!tarUrl)return
    var list=[];
    fs.open(srcUrl,"r",function(err,fdr){
      fs.open(tarUrl,"w",function(err,fdw){
          var options=0;
          function read(){
              var buffer=new Buffer(3);
              fs.read(fdr,buffer,0,3,options, function (err,bytesRead) {
                  fs.write(fdw,buffer,0,3,options,function(e,b){
                     //fs.close(fdw);
                  })
                  options+=bytesRead;
                  if(bytesRead)read();
              })

          }
          read();

      })
    })
}
copy("index.html","line1.text");