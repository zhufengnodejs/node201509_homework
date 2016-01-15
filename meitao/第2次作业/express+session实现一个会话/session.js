var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var FileStore=require('./FileStoreConn')(session);
var app = express();
app.use(session({
    secret: '12345',
    cookie: {maxAge: 30000},  //设置过期时间30秒
    resave: false,
    saveUninitialized: true,
    store:new FileStore({dir:'./session'})
}));

app.get('/Set',function(req,res){
    req.session.name = 'meitao';
    res.end('end');
});

app.get('/read',function(req,res){
    res.end(req.session.name);
});
app.listen(8080);