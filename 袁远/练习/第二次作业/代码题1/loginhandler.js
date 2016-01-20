
var fs = require('fs');
var user=[];
exports.main = function(req,res){
    fs.createReadStream('./main.html').pipe(res);
}
exports.regist = function(req,res){
	console.log(req.query)
	if(req.query.username){
		user.push(req.query);
		fs.createReadStream('./login.html').pipe(res);
	}
	
   
}
exports.login = function(req,res){
	
    res.render('welcome',req.query);
}
