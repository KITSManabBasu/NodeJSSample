var mongoose = require('mongoose');

module.exports = mongoose.model('Freezes', {
	SLNO : {type : Number, default: 0},
	StartDate :  {type: Date, default: Date.now},
	EndDate : {type: Date, default: Date.now},
	Freeze : {type: Boolean, default: true},
	CREATED_BY : {type : String, default: ''},
	CREATED_ON : {type: Date, default: Date.now},
	UPDATED_BY : {type : String, default: ''},
	UPDATED_ON: { type: Date, default: Date.now }
});