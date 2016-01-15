var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("欢迎页面 get");
  res.render('index', { title: '欢迎访问' });

});
router.post('/', function(req, res, next) {
  console.log("欢迎页面 post");

  console.log("req.body :",req.body);
  var username = req.body["username"];
  var password = req.body["password"];

  //res.setHeader("Set-Cookie",'username='+username+"; password="+password);
  localStorage.username = username;
  localStorage.password = password;
  localStorage.isLogin = true;
  res.redirect("/users/login");
});

module.exports = router;
