var Won = require('./models/won');

function getWonMasters(res){
	Won.find(function(err, won) {
		console.log('called getWonMasters')
			res.header("Access-Control-Allow-Origin", "*");
      		res.header("Access-Control-Allow-Headers", "X-Requested-With");

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(won); // return all todos in JSON format
			//res.json(encrdecr.decrypt(todos));

		});
};
/*
module.exports = function(app) {
	// api ---------------------------------------------------------------------
	app.get('/api/wons', function(req, res) {

		// use mongoose to get all todos in the database
		getWonMasters(res);
	});	
};*/

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  getWonMasters(res);
});
router.post('/', function(req, res) {
  // Create user
  res.send('Some response.');
});

module.exports.router = router;