var mongoose = require('mongoose');

module.exports = mongoose.model('Teams', {
	TEAM_ID : {type : Number, default: 0},
	TEAM_NAME : {type : String, default: ''}
});