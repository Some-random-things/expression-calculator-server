var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var algorythmController = require('./controllers/algorithmController.js');

app.use(bodyParser.json());

app.post('/', algorythmController.calculate);
app.get('/smth', algorythmController.calculate);

app.listen(3004, function() {
  console.log('Server is running');
});
