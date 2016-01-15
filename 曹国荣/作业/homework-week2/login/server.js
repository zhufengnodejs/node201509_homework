var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();

var userList = [];
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'zfpx',
    cookie: {maxAge: 3 * 60 * 60 * 1000}, 
    resave: false,
    saveUninitialized: true
}));
app.set('view engine', 'html');
app.set('views', __dirname);
app.engine('html', require('ejs').__express);

app.get('/login', function (req, res) {
    res.render('login');
});
app.get('/register', function (req, res) {
    res.render('register');
});
app.get('/', function (req, res) {
    res.render('register');
});

app.post('/login', function (req, res) {
    console.log(validate(req.body));
    if (validate(req.body)) {
        res.render('user', {username:req.body.username});
    } else {
        res.render('register');
    }
});

app.post('/register', function (req, res) {
    if (!validate(req.body)) {
        res.render('login');
    }
});

app.listen(8888);

function validate(data) {
    var flag = false;
    for (var i=0; i<userList.length; i++) {
        var user = userList[i];
        if (user.username == data.username && user.password == data.password) {
            flag = true;
        }
    }
    if (flag === false) {
        userList.push(data);
    }
    return flag;
}