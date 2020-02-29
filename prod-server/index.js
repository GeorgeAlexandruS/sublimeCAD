'use strict';

var express = require('express');
var app = express();
var port = 3000;

app.get('/', function (req, res) {
  return res.send('Hello my nice beautiful World!');
});

app.listen(port, function () {
  return console.log('Example app listening on port http://127.0.0.1:' + port + '!');
});