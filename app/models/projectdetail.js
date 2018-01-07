var mongoose = require('mongoose');

module.exports = mongoose.model('Projectdetails', {
	PROJECT_CODE : {type : Number, default: 0},
	PROJECT_NAME : {type : String, default: ''},	
	BUSINESS_AREA_ID : {type: mongoose.Schema.Types.ObjectId, ref: 'Businessareas'},
	PROJECT_TYPE_ID : {type: mongoose.Schema.Types.ObjectId, ref: 'Projecttypes'},
	BUDGET_CATEGORY_ID :{type: mongoose.Schema.Types.ObjectId, ref: 'Budgetcategories'},
	PROJECT_CATEGORY_ID : {type: mongoose.Schema.Types.ObjectId, ref: 'Projectcategories'},
	ACTIVE : {type : String, default: ''},	
	BS_NON_BS : {type : String, default: ''},
	BUDGET_TYPE : {type : String, default: ''},	
	CREATED_BY : {type : String, default: ''},
	CREATED_ON : {type: Date, default: Date.now},
	UPDATED_BY : {type : String, default: ''},
	UPDATED_ON: { type: Date, default: Date.now }
});