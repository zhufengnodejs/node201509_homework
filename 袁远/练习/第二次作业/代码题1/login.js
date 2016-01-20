var express = require('express');
var app = express();
require('./route')(app);
app.listen(8080);