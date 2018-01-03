var mongoose = require('mongoose');

module.exports = mongoose.model('Allocations', {
	PROJECT_CODE : {type : String, default: ''},
	userid : {type : String, default: ''},			
	WON : {type : Number, default: 0},
	BIL_DESC_ID : {type : String, default: ''},
	START_DATE : {type : String, default: ''},
	END_DATE : {type : String, default: ''},
	DAILY_RATE : {type : Number, default: 0},
});