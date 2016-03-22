var shell = require('shelljs');
var fs = require('fs');

var command = '';

fs.readFile('make_post.sh', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
	command = data;
});

setInterval(function(){
	shell.exec(command);
}, 5000);
