var mongoose = require('mongoose');

module.exports = mongoose.model('Freezes', {
	SLNO : {type : Number, default: 0},
	StartDate : {type : String, default: ''},
	EndDate : {type : String, default: ''},
	Freeze : {type : Boolean, default: false},	
	UpdatedBy : {type : String, default: ''},	
	UpdatedOn : {type : String, default: ''}
});