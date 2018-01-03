var mongoose = require('mongoose');

module.exports = mongoose.model('Allocationdetail', {
	_id : {type : String, default: ''},
	PROJECT_CODE : {type : String, default: ''},
	PROJECT_NAME : {type : String, default: ''},
	userid : {type : String, default: ''},
	username : {type : String, default: ''},
	useremployeeid : {type : String, default: ''},			
	WON : {type : Number, default: 0},
	WONDESC : {type : String, default: ''},
	BIL_DESC_ID : {type : String, default: ''},
	BIL_DESC : {type : String, default: ''},
	BILLTYPE : {type : String, default: ''},
	START_DATE : {type : String, default: ''},
	END_DATE : {type : String, default: ''},
	DAILY_RATE : {type : Number, default: 0},
});