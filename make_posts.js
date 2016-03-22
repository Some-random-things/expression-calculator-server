var shell = require('shelljs');
var fs = require('fs');


function makeCommand(i) {
	var command = 'curl -H \"Content-Type: application/json\" -X POST -d \'{"i":' + i + '","password\":\"xyz\"}\' http://localhost:3004';
}

fs.readFile('make_post.sh', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
	command = data;
});

var i = 0;
shell.exec(makeCommand(i));
// setInterval(function(){
// 	shell.exec(makeCommand(i));
// 	i++;
// }, 5000);
