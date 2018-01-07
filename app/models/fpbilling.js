var mongoose = require('mongoose');

module.exports = mongoose.model('Fpbillings', {
	WON : {type: mongoose.Schema.Types.ObjectId, ref: 'Wons'},
	bill_amount : {type : Number, default: 0},
	billing_date : {type : Date, default: Date.now},
	bil_desc_id : {type : String, default: ''},
	CREATED_BY : {type : String, default: ''},
	CREATED_ON : {type: Date, default: Date.now},
	UPDATED_BY : {type : String, default: ''},
	UPDATED_ON: { type: Date, default: Date.now }
});