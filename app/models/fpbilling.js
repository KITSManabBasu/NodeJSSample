var mongoose = require('mongoose');

module.exports = mongoose.model('Fpbillings', {
	WON : {type : Number, default: 0},
	bill_amount : {type : Number, default: 0},
	billing_date : {type : String, default: ''},
	bil_desc_id : {type : String, default: ''},
	CREATED_BY : {type : String, default: ''},
	CREATED_ON : {type : String, default: ''},
	UPDATED_BY : {type : String, default: ''},
	UPDATED_ON : {type : String, default: ''}
});