var express = require('express'),
    fs = require('fs'),
    bodyParser = require('body-parser');

var app = express(),
    users = {};

app.use(bodyParser());

app.get('/', function (req, res) {
    fs.createReadStream('login.html').pipe(res);
});

app.get('/index', function (req, res) {
    fs.createReadStream('index.html').pipe(res);
});

app.post('/login', function(req, res) {
    var uname = req.body.userName,
        pwd = req.body.password;
    if(users[uname] && users[uname] == pwd) {
        res.redirect('/index');
        res.end();
    }else {
        users[uname] = pwd;
        res.redirect('/');
        res.end();
    }
});

app.listen(8080);