var mongoose = require('mongoose');

module.exports = mongoose.model('Businessareas', {
	BUSINESS_AREA_ID : {type : Number, default: 0},
	BUSINESS_AREA_DESC : {type : String, default: ''}
});