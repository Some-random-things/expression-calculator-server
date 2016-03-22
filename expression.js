var expressions = ['sqrt(3^2 + 4^2)', 'sqrt(3^2 + 4^3)', 'sqrt(3^2 + 4^12)'];


console.log(JSON.stringify(process.argv))

console.log('The process is running');
var math = require('mathjs');

console.log(math.eval('sqrt(3^2 + 4^2)'));
