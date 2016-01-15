/**
 * Created by Administrator on 2016/1/12.
 */
var express = require('express');
var querystring = require('querystring');
var app = express();
app.set('view engine','html');
app.set('views',__dirname);
app.engine('html',require('ejs').__express);

app.get('/', function(req,res) {
    res.render('index');
});
app.post('/login', function(req,res) {
    req.on('data', function(data) {
        var cookies = querystring.parse(data.toString());
        var date = new Date(new Date().getTime() + 60 * 1000000).toGMTString();
        res.setHeader('Set-Cookie', [('name=' + cookies.name + '; path=/; expires=' + date),('pwd=' + cookies.pwd + '; path=/; expires=' + date)]);
        res.render('login');
    });

});
app.post('/welcome', function(req,res) {
    var cookies = querystring.parse(req.headers.cookie, '; ', '=');
    req.on('data', function(data) {
        var cookie = querystring.parse(data.toString());
        if(cookies.name == cookie.name && cookies.pwd == cookie.pwd) {
            res.render('welcome');
        } else {
            res.render('login');
        }
    })


});
app.listen(8080);