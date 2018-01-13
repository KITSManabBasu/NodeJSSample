var mongoose = require('mongoose');

module.exports = mongoose.model('Weeks', {
	YEARWEEK : {type : Number, default: 0},
	TRADINGYEAR : {type : Number, default: 0},
	TRADINGWEEK : {type : Number, default: 0},
	TRADINGPERIOD : {type : Number, default: 0},
	TRADINGQUARTER : {type : Number, default: 0},
	TRADINGHALFYEAR : {type : Number, default: 0},
	WEEKSTARTDATE: { type: Date, default: Date.now },
	WEEKENDDATE: { type: Date, default: Date.now }
});