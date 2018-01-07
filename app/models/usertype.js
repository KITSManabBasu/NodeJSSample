var mongoose = require('mongoose');

module.exports = mongoose.model('Usertypes', {
	USER_TYPE_ID : {type : Number, default: 0},
	USER_TYPE_DESC : {type : String, default: ''}
});