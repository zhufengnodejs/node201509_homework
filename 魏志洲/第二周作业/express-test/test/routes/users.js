var express = require('express');
var router = express.Router();
var middleware = require("../middleware/index");


/* GET users listing. */
router.get('/reg', function(req, res, next) {
  res.render('reg', { title: '注册' });
});

router.post('/reg', middleware.checkNotLogin,function(req, res, next) {
  console.log("注册页面");
  res.render('reg', { title: '注册' });
});

router.get("/login", middleware.checkLogin ,function(req, res, next){
  console.log("登陆页面");
  var username = localStorage.username;
  var password = localStorage.password;
  if(localStorage.isLogin)
    res.render("login", { title: "欢迎访问", info: "" });
  else
    res.render("login", { title: "欢迎访问", info: "账号或者密码错误，请重新输入!"});
});

router.post("/login", middleware.checkLogin , function(req, res, next){
  var username = localStorage.username;
  var password = localStorage.password;
  console.log("username :"+username+", password :"+password);
  if((username== req.body["username"]) && (req.body["password"]==password)){
    res.render("success",{ title:"成功登陆", name:username});
    localStorage.isLogin=true;
  }else{
    localStorage.isLogin=false;
    res.redirect("/users/login");
  }
});

router.get("/logout", middleware.checkLogin,function(req, res, next){
  console.log("登陆退出页面");
  //var username = req.cookies.username;
  //res.setHeader("Set-Cookie", "");
  var username = localStorage.username;
  delete localStorage.username;
  delete localStorage.password;
  delete localStorage.isLogin;
  res.render("logout", { title:"再见", name:username});
});


module.exports = router;
