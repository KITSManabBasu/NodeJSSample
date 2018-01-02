var mongoose = require('mongoose');

module.exports = mongoose.model('Billdescrips', {	
	TYPE : {type : String, default: ''},
	DESCRIPTION : {type : String, default: ''},
	CREATED_BY : {type : String, default: ''},
	CREATED_WHEN : {type : String, default: ''},
	UPDATED_BY : {type : String, default: ''},
	UPDATED_WHEN : {type : String, default: ''}
});