var mongoose = require('mongoose');

module.exports = mongoose.model('Users', {
	userid : {type : String, default: ''},
	password : {type : String, default: ''},
	employeeid : {type : String, default: ''},
	title : {type : String, default: ''},	
	roleid : {type: mongoose.Schema.Types.ObjectId, ref: 'Roles'},
	//roleText : {type : String, default: ''},	
	teamid : {type: mongoose.Schema.Types.ObjectId, ref: 'Teams'},
	//teamText : {type : String, default: ''},		
	firstname : {type : String, default: ''},	
	middlename : {type : String, default: ''},	
	lastname : {type : String, default: ''},	
	billingtypeid : {type: mongoose.Schema.Types.ObjectId, ref: 'Billdescrips'},
	//billingtypeText : {type : String, default: ''},
	teamleadid : {type: mongoose.Schema.Types.ObjectId, ref: 'Users'},
	//teamleadText : {type : String, default: ''},	
	locid : {type: mongoose.Schema.Types.ObjectId, ref: 'Locs'},
	//locText : {type : String, default: ''},		
	desigid : {type: mongoose.Schema.Types.ObjectId, ref: 'Desigs'},
	//desigText : {type : String, default: ''},
    isu : {type : String, default: ''},
	usertypeid : {type: mongoose.Schema.Types.ObjectId, ref: 'Usertypes'},
	//usertypeText : {type : String, default: ''},
	companyid : {type: mongoose.Schema.Types.ObjectId, ref: 'Companies'},
	//companyText : {type : String, default: ''},
	mobileno : {type : String, default: ''},
	deskphno : {type : String, default: ''},	
	geoid : {type: mongoose.Schema.Types.ObjectId, ref: 'Geos'},
	//geoText : {type : String, default: ''},

	isProjectUser : {type : Boolean, default: false},
	isTimeSheetUser : {type : Boolean, default: false},
	isProjectReportUser : {type : Boolean, default: false},
	isTimeSheetReportUser : {type : Boolean, default: false},
	isTimeSheetUserAllocation : {type : Boolean, default: false},

	CREATED_BY : {type : String, default: ''},
	CREATED_ON : {type: Date, default: Date.now},
	UPDATED_BY : {type : String, default: ''},
	UPDATED_ON: { type: Date, default: Date.now }
		
});