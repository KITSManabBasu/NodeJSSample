var mongoose = require('mongoose');

module.exports = mongoose.model('Roles', {
	ROLE_ID : {type : Number, default: 0},
	ROLE_DESC : {type : String, default: ''}
});