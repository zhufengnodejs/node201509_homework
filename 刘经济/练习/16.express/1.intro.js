var express = require('express');

var app = express();

app.get('/list', function(req, res) {
    res.send('list' + req.url);
});

app.post('/list', function (req, res) {
    res.send('list' + req.url);
});

app.listen(8080);