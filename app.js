var express = require('express');
var app = express();

var algorythmController = require('./controllers/algorithmController.js');

app.post('/', algorythmController.calculate);

app.listen(3004, function() {
  console.log('Server is running');
})
