var mongoose = require('mongoose');

module.exports = mongoose.model('Allocations', {
	PROJECT_CODE : {type: mongoose.Schema.Types.ObjectId, ref: 'Projectdetails'},
	userid : {type: mongoose.Schema.Types.ObjectId, ref: 'Users'},			
	WON : {type: mongoose.Schema.Types.ObjectId, ref: 'Wons'},	
	BIL_DESC_ID : {type: mongoose.Schema.Types.ObjectId, ref: 'Billdescrips'},	
	START_DATE : {type : Date, default: Date.now},
	END_DATE : {type : Date, default: Date.now},
	DAILY_RATE : {type : Number, default: 0},
	CREATED_BY : {type : String, default: ''},
	CREATED_ON : {type: Date, default: Date.now},
	UPDATED_BY : {type : String, default: ''},
	UPDATED_ON: { type: Date, default: Date.now }
});