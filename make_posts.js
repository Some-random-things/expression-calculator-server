// var shell = require('shelljs');
//
// function makeCommand(i) {
// 	return 'curl -H "Content-Type: application/json" -X POST -d \'{"i": 2}\' http://localhost:3004';
// 	return 'curl -H \"Content-Type: application/json\" -X POST -d \'{"i":' + i + '}\' http://localhost:3004';
// }
//
// var i = 0;
// setInterval(function(){
// 	shell.exec(makeCommand(i));
// 	i++;
// }, 1000);

const socket = require('net');

var client = socket.connect({
	port: 3004,
	host: 'localhost',
	path: '/smth'
}, () => {
	console.log('Connected');
	client.write(JSON.stringify({i: 2}));
});

client.on('error', err => {
	console.log(err);
});

client.on('data', data => {
	console.log(data);
	client.end();
});

client.on('end', () => {
	console.log('disconnected');
});
