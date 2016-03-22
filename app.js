var express = require('express');
var app = express();

var algorythmController = require('./controllers/algorithmController.js');

app.get('/', algorythmController.calculate);

app.listen(3004, function() {
  console.log('Server is running');
})
