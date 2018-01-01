var mongoose = require('mongoose');

module.exports = mongoose.model('Projectdetails', {
	PROJECT_CODE : {type : Number, default: 0},
	PROJECT_NAME : {type : String, default: ''},	
	BUSINESS_AREA_ID : {type : Number, default: 0},
	PROJECT_TYPE_ID : {type : Number, default: 0},
	BUDGET_CATEGORY_ID : {type : Number, default: 0},
	PROJECT_CATEGORY_ID : {type : Number, default: 0},	
	ACTIVE : {type : String, default: ''},	
	BS_NON_BS : {type : String, default: ''},
	BUDGET_TYPE : {type : String, default: ''},	
	USER_ID : {type : String, default: ''},
	STMP : {type : String, default: ''}
});