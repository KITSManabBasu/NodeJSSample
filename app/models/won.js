var mongoose = require('mongoose');

module.exports = mongoose.model('Wons', {
	WON : {type : Number, default: 0},
	WON_DESC : {type : String, default: ''},
	WON_TYPE : {type : String, default: ''},
	OFF_ON : {type : String, default: ''},
	IS_ACTIVE : {type : String, default: ''},
	START_DATE : {type : Date, default: Date.now},
	END_DATE : {type : Date, default: Date.now},
	GEO_ID: {type: mongoose.Schema.Types.ObjectId, ref: 'Geos'},
	OWNER_ID : {type: mongoose.Schema.Types.ObjectId, ref: 'Users'},
	CREATED_BY : {type : String, default: ''},
	CREATED_ON : {type: Date, default: Date.now},
	UPDATED_BY : {type : String, default: ''},
	UPDATED_ON: { type: Date, default: Date.now }
});