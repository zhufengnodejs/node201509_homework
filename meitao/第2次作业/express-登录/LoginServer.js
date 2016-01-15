var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();

var userinfo = [];
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    secret: '12345',
    cookie: {maxAge: 80000},  //设置过期时间是80s
    resave: false,
    saveUninitialized: true
}));
app.set('view engine', 'html');
app.set('views', __dirname);
app.engine('html', require('ejs').__express);


////登录显示
app.get('/login', function (req, res) {
    res.render('login');
});
app.get('/REG', function (req, res) {
    res.render('reg');
});
app.get('/', function (req, res) {
    res.render('reg');
});


///登录
app.post('/login', function (req, res) {
    if (checkUserinfo(req.body) == 1) {
        res.render('welcome', req.body);
    }
    else {
        console.log("注册页面");

        res.render('reg');
    }
});

//注册
app.post('/REG', function (req, res) {
//console.log(req.body);
    if (checkUserinfo(req.body) == 0) {
        res.render('login');

    }

});


app.listen(8080);

function checkUserinfo(data) {
    var flag = 0;
    userinfo.forEach(function (user) {
        if (user.username == data.username && user.password == data.password) {
            flag = 1;
        }
    });
    if (flag == 0) {
        userinfo.push(data);
    }

    return flag;

}
