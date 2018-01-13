var mongoose = require('mongoose');

module.exports = mongoose.model('Periods', {
	TRADINGYEAR : {type : Number, default: 0},	
	TRADINGPERIOD : {type : Number, default: 0},
	WEEKSTARTDATE: { type: Date, default: Date.now },
	WEEKENDDATE: { type: Date, default: Date.now }
});