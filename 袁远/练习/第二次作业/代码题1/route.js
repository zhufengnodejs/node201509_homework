
var loginhandler = require('./loginhandler');
var fs = require('fs');
module.exports = function(app){
    
	app.set('view engine','ejs');
	app.set('views',__dirname);
    app.use("/regist",function(req,res){
        loginhandler.regist(req,res);
    });
    app.use("/login",function(req,res){
        loginhandler.login(req,res);
    });
    app.use("/",function(req,res){
       loginhandler.main(req,res);
    });
    app.use(function(req,res){
        res.end("404");
    });
}