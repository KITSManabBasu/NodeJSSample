var mongoose = require('mongoose');

module.exports = mongoose.model('Projecttypes', {
	PROJECT_TYPE_ID : {type : Number, default: 0},
	PROJECT_TYPE_DESC : {type : String, default: ''}
});