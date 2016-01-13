var express = require("express")
var cookieParser=require("cookie-parser");
var session = require('express-session');
var bodyParser = require('body-parser')
var path=require("path")
var app= express();

app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static(path.join(__dirname,"/public")))
app.use(cookieParser())
app.use(session({
    secret: 'fjj', //secret的值建议使用随机字符串
    cookie: {maxAge: 60 * 1000 * 30}, // 过期时间（毫秒）
    resave:true,
    saveUninitialized:true
}));


var checkLogin=require("./checkLogin")

app.get("/",checkLogin,function(req,res){
    res.render("index",{title:"欢迎页",username:req.session.username})
})
app.get("/reg",function(req,res){
    if(req.session.sign){
        res.redirect("/")
    }
    if(req.session.username){
        res.redirect("/login")
    }
    res.render("reg",{title:"注册页面"})
})
app.post("/reg",urlencodedParser,function(req,res){
    var username=req.body.username,
        pwd=req.body.pwd,
        repeatpwd=req.body.repeatpwd;
    if(username && (pwd === repeatpwd)){
        req.session.username=username;
        req.session.pwd=pwd;
        res.cookie("username",username,{maxAge:10*60*1000})
        res.redirect("/login")
    }else{
        res.redirect("/reg")
    }
})
app.get("/login",function(req,res){
    if(req.session.sign){
        res.redirect("/")
    }
    if(!req.session.username){
        res.redirect("/reg")
    }
    var username=req.session.username;
    res.render("login",{title:"登陆页面",username:username})
})
app.post("/login",urlencodedParser,function(req,res){
    var username=req.body.username,
        pwd=req.body.pwd;
    if((req.session.username === username) && (req.session.pwd === pwd)){
        req.session.sign=true
        res.redirect("/")
    }else{
        res.redirect("/login")
    }
})
app.get("/unlogin",function(req,res){
    //console.log("unlogin")
    req.session.sign=false;
    res.redirect("/login")
})
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err,req,res,next){
    res.send("not found!")
});

module.exports=app;