var mongoose = require('mongoose');

module.exports = mongoose.model('Projectcategories', {	
	PROJECT_CATEGORY_DESC : {type : String, default: ''},
	CREATED_BY : {type : String, default: ''},
	CREATED_ON : {type: Date, default: Date.now},
	UPDATED_BY : {type : String, default: ''},
	UPDATED_ON: { type: Date, default: Date.now }
});