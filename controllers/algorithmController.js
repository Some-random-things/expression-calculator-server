var async = require('asyncawait/async');
var await = require('asyncawait/await');
var childProcess = require('child_process');

module.exports = {
	/**
	 * @apiname calculate
	 * @version 0.0.1
	 * @param {object} input - expression params
	 */
	calculate: async(function(req, res) {
		var result = '',
				param = req.body;
		try {
			var workerProcess = childProcess.exec('node expression.js ' + param.i,
				function (error, stdout, stderr) {
		      console.log('stdout: ' + stdout);
		    }
			);
			workerProcess.on('end', function() {
				console.log('worker ended');
			});
		} catch (e) {
			result = e.message;
		} finally {
			res.end(JSON.stringify(param));
		}
	})
}
