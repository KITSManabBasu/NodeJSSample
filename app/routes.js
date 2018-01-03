var Todo = require('./models/todo');
var Role = require('./models/role');
var Team = require('./models/team');
var BillingType = require('./models/billingtype');
var Desig = require('./models/desig');
var UserType = require('./models/usertype');
var Company = require('./models/company');
var Loc = require('./models/loc');
var Geo = require('./models/geo');
var User = require('./models/user');
var Won = require('./models/won');
var Projectdetail = require('./models/projectdetail');
var Businessarea = require('./models/businessarea');
var Projecttype = require('./models/projecttype');
var Fpbilling = require('./models/fpbilling');
var Billdescrips=require('./models/billdescrips');
var Allocation=require('./models/allocation');

var encrdecr=require('../security/encrdecr.js');
 
var hw = encrdecr.encrypt("hello world");
// outputs hello world
//console.log(hw);
console.log(encrdecr.decrypt(hw));

function getTodos(res){
	Todo.find(function(err, todos) {

			res.header("Access-Control-Allow-Origin", "*");
      		res.header("Access-Control-Allow-Headers", "X-Requested-With");
			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(todos); // return all todos in JSON format
			//res.json(encrdecr.decrypt(todos));
		});
};

//*********************************SECTION USER************************************************
function getUsers(res){
	User.find(function(err, users) {
			res.header("Access-Control-Allow-Origin", "*");
      		res.header("Access-Control-Allow-Headers", "X-Requested-With");
			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)
			res.json(users); // return all todos in JSON format
			//res.json(encrdecr.decrypt(todos));
		}).sort( { firstname: 1 } );
};
function getUserByID(req,res){
	console.log(req.params.user_id);
	User.find({_id : req.params.user_id},function(err, user) {
		res.header("Access-Control-Allow-Origin", "*");
      	res.header("Access-Control-Allow-Headers", "X-Requested-With");
			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)
			res.json(user); // return all todos in JSON format
		});
};
function getUserByLoginID(req,res){
	console.log(req.params.user_id);
	User.find({userid : req.params.userloginid},function(err, user) {
		res.header("Access-Control-Allow-Origin", "*");
      	res.header("Access-Control-Allow-Headers", "X-Requested-With");
			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)
			res.json(user); // return all todos in JSON format
		});
};
function getRoles(res){
	Role.find(function(err, roles) {

			res.header("Access-Control-Allow-Origin", "*");
      		res.header("Access-Control-Allow-Headers", "X-Requested-With");
			if (err)
				res.send(err)
			res.json(roles);
		});
};
function getTeams(res){
	Team.find(function(err, teams) {
			res.header("Access-Control-Allow-Origin", "*");
      		res.header("Access-Control-Allow-Headers", "X-Requested-With");
			if (err)
				res.send(err)
			res.json(teams);
		}).sort({TEAM_NAME:1});
};
function getBillingTypes(res){
	BillingType.find(function(err, billingtype) {
			res.header("Access-Control-Allow-Origin", "*");
      		res.header("Access-Control-Allow-Headers", "X-Requested-With");
			if (err)
				res.send(err)
			res.json(billingtype);
		});
};

function getDesigs(res){
	Desig.find(function(err, desigs) {
			res.header("Access-Control-Allow-Origin", "*");
      		res.header("Access-Control-Allow-Headers", "X-Requested-With");
			if (err)
				res.send(err)
			res.json(desigs);
		}).sort( { SORT_ORDER: 1 } );
};
function getUserType(res){
	UserType.find(function(err, usertype) {
			res.header("Access-Control-Allow-Origin", "*");
      		res.header("Access-Control-Allow-Headers", "X-Requested-With");
			if (err)
				res.send(err)
			res.json(usertype);
		}).sort( { USER_TYPE_ID: 1 } );
};
function getCompanies(res){
	Company.find(function(err, company) {
			res.header("Access-Control-Allow-Origin", "*");
      		res.header("Access-Control-Allow-Headers", "X-Requested-With");
			if (err)
				res.send(err)
			res.json(company);
		}).sort( { COMPANY_ID: 1 } );
};
function getLocs(res){
	Loc.find(function(err, loc) {
			res.header("Access-Control-Allow-Origin", "*");
      		res.header("Access-Control-Allow-Headers", "X-Requested-With");
			if (err)
				res.send(err)
			res.json(loc);
		}).sort( { LOC_ID: 1 } );
};
function getGeos(res){
	Geo.find(function(err, geo) {
			res.header("Access-Control-Allow-Origin", "*");
      		res.header("Access-Control-Allow-Headers", "X-Requested-With");
			if (err)
				res.send(err)
			res.json(geo);
		}).sort( { LOC_ID: 1 } );
};
//*********************************SECTION WON************************************************
function getWons(res){
	Won.find(function(err, won) {
		console.log('called getWonMasters');
			res.header("Access-Control-Allow-Origin", "*");
      		res.header("Access-Control-Allow-Headers", "X-Requested-With");

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(won); // return all todos in JSON format
			//res.json(encrdecr.decrypt(todos));

		});
};
function getWonByuniqueID(req,res){
	console.log(req.params.uniqueid);
	Won.find({WON : req.params.uniqueid},function(err, won) {
		res.header("Access-Control-Allow-Origin", "*");
      	res.header("Access-Control-Allow-Headers", "X-Requested-With");
			if (err)
				res.send(err)
			res.json(won); 
		});
};
function getUserByInternalID(req,res){
	console.log(req.params.internalid);
	Won.find({_id : req.params.internalid},function(err, won) {
		res.header("Access-Control-Allow-Origin", "*");
      	res.header("Access-Control-Allow-Headers", "X-Requested-With");
			if (err)
				res.send(err)
			res.json(won); 
		});
};
//*********************************SECTION PROJECTDETAILS************************************************
function getProjectdetails(res){
	Projectdetail.find(function(err, projectdetail) {
		
			res.header("Access-Control-Allow-Origin", "*");
      		res.header("Access-Control-Allow-Headers", "X-Requested-With");
			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)
			res.json(projectdetail); 
		});
};
function getProjectdetailByuniqueID(req,res){
	console.log(req.params.uniqueid);
	Projectdetail.find({PROJECT_CODE : req.params.uniqueid},function(err, projectdetail) {
		res.header("Access-Control-Allow-Origin", "*");
      	res.header("Access-Control-Allow-Headers", "X-Requested-With");
			if (err)
				res.send(err)
			res.json(projectdetail); 
		});
};
function getProjectdetailByInternalID(req,res){
	console.log(req.params.internalid);
	Projectdetail.find({_id : req.params.internalid},function(err, projectdetail) {
		res.header("Access-Control-Allow-Origin", "*");
      	res.header("Access-Control-Allow-Headers", "X-Requested-With");
			if (err)
				res.send(err)
			res.json(projectdetail); 
		});
};

function getBusinessareas(res){
	Businessarea.find(function(err, businessarea) {
			res.header("Access-Control-Allow-Origin", "*");
      		res.header("Access-Control-Allow-Headers", "X-Requested-With");
			if (err)
				res.send(err)
			res.json(businessarea);
		}).sort( { BUSINESS_AREA_ID : 1 } );
};

function getProjecttypes(res){
	Projecttype.find(function(err, projecttype) {
			res.header("Access-Control-Allow-Origin", "*");
      		res.header("Access-Control-Allow-Headers", "X-Requested-With");
			if (err)
				res.send(err)
			res.json(projecttype);
		}).sort( { PROJECT_TYPE_ID: 1 } );
};
//*********************************SECTION FPBILLING**************************************************
function getFpbillings(res){
	Fpbilling.find(function(err, fpbilling) {		
			res.header("Access-Control-Allow-Origin", "*");
      		res.header("Access-Control-Allow-Headers", "X-Requested-With");
			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)
			res.json(fpbilling); 
		}).sort( { WON: 1 } );
};

function getFpbillingsByInternalID(req,res){
	console.log(req.params.internalid);
	Fpbilling.find({_id : req.params.internalid},function(err, fpbilling) {
		res.header("Access-Control-Allow-Origin", "*");
      	res.header("Access-Control-Allow-Headers", "X-Requested-With");
			if (err)
				res.send(err)
			res.json(fpbilling); 
		});
};
//*********************************SECTION BILLING DESCRIPTION**************************************************
function getBilldescrips(res){
	Billdescrips.find(function(err, billdescrip) {		
			res.header("Access-Control-Allow-Origin", "*");
      		res.header("Access-Control-Allow-Headers", "X-Requested-With");
			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)
			res.json(billdescrip); 
		}).sort( { DESCRIPTION: 1 } );
};

function getBilldescripsByInternalID(req,res){
	console.log(req.params.internalid);
	Billdescrips.find({_id : req.params.internalid},function(err, billdescrip) {
		res.header("Access-Control-Allow-Origin", "*");
      	res.header("Access-Control-Allow-Headers", "X-Requested-With");
			if (err)
				res.send(err)
			res.json(billdescrip); 
		});
};
//*********************************SECTION ALLOCATION**************************************************
function getAllocations(res){
	Allocation.find(function(err, allocation) {		
			res.header("Access-Control-Allow-Origin", "*");
      		res.header("Access-Control-Allow-Headers", "X-Requested-With");
			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
			{
				console.log(err);
				res.send(err)
			}
			res.json(allocation); 
		}).sort( { userid: 1 } );
};

function getAllocationsByInternalID(req,res){
	console.log(req.params.internalid);
	Allocation.find({_id : req.params.internalid},function(err, allocation) {
		res.header("Access-Control-Allow-Origin", "*");
      	res.header("Access-Control-Allow-Headers", "X-Requested-With");
			if (err)
				res.send(err)
			res.json(allocation); 
		});
};

//*********************************END OF ALL SECTIONS************************************************
module.exports = function(app) {

	// api ---------------------------------------------------------------------
//*********************************START OF USER************************************************
	app.get('/api/roles', function(req, res) {
		getRoles(res);
	});
	app.get('/api/teams', function(req, res) {
		getTeams(res);
	});
	app.get('/api/billingtypes', function(req, res) {
		getBillingTypes(res);
	});
	app.get('/api/desigs', function(req, res) {
		getDesigs(res);
	});
	app.get('/api/usertypes', function(req, res) {
		getUserType(res);
	});
	app.get('/api/companies', function(req, res) {
		getCompanies(res);
	});
	app.get('/api/locs', function(req, res) {
		getLocs(res);
	});
	app.get('/api/geos', function(req, res) {
		getGeos(res);
	});
	app.post('/api/users', function(req, res) {
		console.log(req.body);
		User.create({
			userid : req.body.userid,
			password : req.body.password,
			employeeid : req.body.employeeid,
			title : req.body.selectedTitle,
			roleid : req.body.selectedRole,
			roleText : req.body.selectedRoleText,

			teamid : req.body.selectedTeam,
			teamText : req.body.selectedTeamText,

			firstname : req.body.firstname,
			middlename : req.body.middlename,
			lastname : req.body.lastname,

			billingtypeid : req.body.selectedBillingType,
			billingtypeText : req.body.selectedBillingTypeText,

			teamleadid : req.body.selectedTeamLead,
			teamleadText : req.body.selectedTeamLeadText,
			
			locid : req.body.selectedLoc,
			locText : req.body.selectedLocText,

			desigid : req.body.selectedDesig,
			desigText : req.body.selectedDesigText,

			isu : req.body.isu,
			usertypeid : req.body.selectedUserType,
			usertypeText : req.body.selectedUserTypeText,

			companyid : req.body.selectedCompany,
			companyText : req.body.selectedCompanyText,

			mobileno : req.body.mobileno,
			deskphno : req.body.deskphno,
			geoid : req.body.selectedGeo,
			geoText : req.body.selectedGeoText,

			isProjectUser : req.body.isProjectUser,
			isTimeSheetUser : req.body.isTimeSheetUser,
			isProjectReportUser : req.body.isProjectReportUser,
			isTimeSheetReportUser : req.body.isTimeSheetReportUser,
			isTimeSheetUserAllocation : req.body.isTimeSheetUserAllocation,

			done : false
		}, function(err, todo) {
			if (err)
				res.send(err);
			res.json(true);
		});
	});
	app.post('/api/users/:user_id', function(req, res) {		
		console.log(req.params.user_id);

		var conditions = { _id : req.params.user_id }
		  , update = { 
		  	userid : req.body.userid,
			password : req.body.password,
			employeeid : req.body.employeeid,
			title : req.body.selectedTitle,
			roleid : req.body.selectedRole,
			roleText : req.body.selectedRoleText,

			teamid : req.body.selectedTeam,
			teamText : req.body.selectedTeamText,

			firstname : req.body.firstname,
			middlename : req.body.middlename,
			lastname : req.body.lastname,

			billingtypeid : req.body.selectedBillingType,
			billingtypeText : req.body.selectedBillingTypeText,

			teamleadid : req.body.selectedTeamLead,
			teamleadText : req.body.selectedTeamLeadText,
			
			locid : req.body.selectedLoc,
			locText : req.body.selectedLocText,

			desigid : req.body.selectedDesig,
			desigText : req.body.selectedDesigText,

			isu : req.body.isu,
			usertypeid : req.body.selectedUserType,
			usertypeText : req.body.selectedUserTypeText,

			companyid : req.body.selectedCompany,
			companyText : req.body.selectedCompanyText,

			mobileno : req.body.mobileno,
			deskphno : req.body.deskphno,
			geoid : req.body.selectedGeo,
			geoText : req.body.selectedGeoText,

			isProjectUser : req.body.isProjectUser,
			isTimeSheetUser : req.body.isTimeSheetUser,
			isProjectReportUser : req.body.isProjectReportUser,
			isTimeSheetReportUser : req.body.isTimeSheetReportUser,
			isTimeSheetUserAllocation : req.body.isTimeSheetUserAllocation
		  }
		  , options = { multi: true };

		User.update(conditions, update, options, callback);

		function callback (err, numAffected) {
		  if (err)
				res.send(err);
			getUsers(res);
		};																
		
	});
   // get all users
	app.get('/api/users', function(req, res) {
		// use mongoose to get all todos in the database
		getUsers(res);
		//getUsersWithDetails(res);
	});
	app.get('/api/users/:user_id/:rnd', function(req, res) {
		console.log('before call user by id');
		getUserByID(req,res);
	});
	app.get('/api/users/:userloginid', function(req, res) {
		getUserByLoginID(req,res);
	});
	// delete a user
	app.delete('/api/users/:user_id', function(req, res) {
		User.remove({
			_id : req.params.user_id
		}, function(err, todo) {
			if (err)
				res.send(err);

			getUsers(res);
		});
	});
//***************************************END OF USER************************************************
//***************************************START OF WON************************************************
	app.get('/api/wons', function(req, res) {

		// use mongoose to get all todos in the database
		getWons(res);
	});	
	app.get('/api/wons/:uniqueid', function(req, res) {
		getWonByuniqueID(req,res);
	});
	app.get('/api/wons/:internalid/:rnd', function(req, res) {		
		getUserByInternalID(req,res);
	});
	// delete a user
	app.delete('/api/wons/:won_id', function(req, res) {
		console.log(req.params.won_id);
		Won.remove({
			_id : req.params.won_id
		}, function(err, todo) {
			if (err)
				res.send(err);
			getWons(res);
		});
	});

	app.post('/api/wons', function(req, res) {
		console.log(req.body);
		Won.create({
			WON : req.body.WON,
			WON_DESC : req.body.WON_DESC,
			WON_TYPE : req.body.WON_TYPE,
			OFF_ON : req.body.OFF_ON,
			IS_ACTIVE : req.body.IS_ACTIVE,
			START_DATE : req.body.START_DATE,
			END_DATE : req.body.END_DATE,
			GEO_ID : req.body.GEO_ID,
			OWNER_NUMBER : req.body.OWNER_NUMBER,
			CREATED_BY : req.body.CREATED_BY,
			CREATED_ON : req.body.CREATED_ON,
			UPDATED_BY : req.body.UPDATED_BY,
			UPDATED_ON : req.body.UPDATED_ON,
			done : false
		}, function(err, todo) {
			if (err)
				res.send(err);
			res.json(true);
		});
	});

	app.post('/api/wons/:internalid', function(req, res) {		
		console.log(req.params.internalid);
		
		var conditions = { _id : req.params.internalid }
		  , update = { 
		  	WON : req.body.WON,
			WON_DESC : req.body.WON_DESC,
			WON_TYPE : req.body.WON_TYPE,
			OFF_ON : req.body.OFF_ON,
			IS_ACTIVE : req.body.IS_ACTIVE,
			START_DATE : req.body.START_DATE,
			END_DATE : req.body.END_DATE,
			GEO_ID : req.body.GEO_ID,
			OWNER_NUMBER : req.body.OWNER_NUMBER,
			CREATED_BY : req.body.CREATED_BY,
			CREATED_ON : req.body.CREATED_ON,
			UPDATED_BY : req.body.UPDATED_BY,
			UPDATED_ON : req.body.UPDATED_ON,
		  }
		  , options = { multi: true };

		Won.update(conditions, update, options, callback);

		function callback (err, numAffected) {
		  if (err)
				res.send(err);
			getUsers(res);
		};																
		
	});

//***************************************END OF WON************************************************

//***************************************START OF PROJECTDETAIL************************************************
	app.get('/api/projectdetails', function(req, res) {
		getProjectdetails(res);
	});	
	app.get('/api/projectdetails/:uniqueid', function(req, res) {
		getProjectdetailByuniqueID(req,res);
	});
	app.get('/api/projectdetails/:internalid/:rnd', function(req, res) {		
		getProjectdetailByInternalID(req,res);
	});
	app.get('/api/businessareas', function(req, res) {
		getBusinessareas(res);
	});	
	app.get('/api/projecttypes', function(req, res) {
		getProjecttypes(res);
	});
	app.delete('/api/projectdetails/:project_id', function(req, res) {
		console.log(req.params.project_id);
		Projectdetail.remove({
			_id : req.params.project_id
		}, function(err, todo) {
			if (err)
				res.send(err);
			getProjectdetails(res);
		});
	});

	app.post('/api/projectdetails', function(req, res) {
		console.log(req.body);
		Projectdetail.create({
			PROJECT_CODE : req.body.PROJECT_CODE,
			PROJECT_NAME : req.body.PROJECT_NAME,
			BUSINESS_AREA_ID : req.body.BUSINESS_AREA_ID,
			PROJECT_TYPE_ID : req.body.PROJECT_TYPE_ID,
			BUDGET_CATEGORY_ID : req.body.BUDGET_CATEGORY_ID,
			PROJECT_CATEGORY_ID : req.body.PROJECT_CATEGORY_ID,
			ACTIVE : req.body.ACTIVE,
			BS_NON_BS : req.body.BS_NON_BS,
			BUDGET_TYPE : req.body.BUDGET_TYPE,
			USER_ID : req.body.USER_ID,
			STMP : req.body.STMP,
			UPDATED_BY : req.body.UPDATED_BY,
			UPDATED_ON : req.body.UPDATED_ON,
			done : false
		}, function(err, todo) {
			if (err)
				res.send(err);
			res.json(true);
		});
	});

	app.post('/api/projectdetails/:internalid', function(req, res) {		
		console.log(req.body);
		console.log(req.params.internalid);
		
		var conditions = { _id : req.params.internalid }
		  , update = { 
		  	PROJECT_CODE : req.body.PROJECT_CODE,
			PROJECT_NAME : req.body.PROJECT_NAME,
			BUSINESS_AREA_ID : req.body.BUSINESS_AREA_ID,
			PROJECT_TYPE_ID : req.body.PROJECT_TYPE_ID,
			BUDGET_CATEGORY_ID : req.body.BUDGET_CATEGORY_ID,
			PROJECT_CATEGORY_ID : req.body.PROJECT_CATEGORY_ID,
			ACTIVE : req.body.ACTIVE,
			BS_NON_BS : req.body.BS_NON_BS,
			BUDGET_TYPE : req.body.BUDGET_TYPE,
			USER_ID : req.body.USER_ID,
			STMP : req.body.STMP,
			UPDATED_BY : req.body.UPDATED_BY,
			UPDATED_ON : req.body.UPDATED_ON,
		  }
		  , options = { multi: true };

		Projectdetail.update(conditions, update, options, callback);

		function callback (err, numAffected) {
		  if (err)
				res.send(err);
			getProjectdetails(res);
		};																
		
	});

//***************************************END OF PROJECT DETAIL************************************************

//***************************************START OF FPBILLING************************************************
	app.get('/api/fpbillings', function(req, res) {
		getFpbillings(res);
	});	
	
	app.get('/api/fpbillings/:internalid/:rnd', function(req, res) {		
		getFpbillingsByInternalID(req,res);
	});
	
	app.delete('/api/fpbillings/:fpbilling_id', function(req, res) {
		console.log(req.params.fpbilling_id);
		Fpbilling.remove({
			_id : req.params.fpbilling_id
		}, function(err, todo) {
			if (err)
				res.send(err);
			getFpbillings(res);
		});
	});

	app.post('/api/fpbillings', function(req, res) {
		console.log(req.body);
		Fpbilling.create({
			WON : req.body.WON,
			bill_amount : req.body.bill_amount,
			billing_date : req.body.billing_date,
			bil_desc_id : req.body.bil_desc_id,
			CREATED_BY : req.body.CREATED_BY,
			CREATED_ON : req.body.CREATED_ON,			
			UPDATED_BY : req.body.UPDATED_BY,
			UPDATED_ON : req.body.UPDATED_ON,
			done : false
		}, function(err, todo) {
			if (err)
				res.send(err);
			res.json(true);
		});
	});

	app.post('/api/fpbillings/:internalid', function(req, res) {		
		console.log(req.body);
		console.log(req.params.internalid);
		
		var conditions = { _id : req.params.internalid }
		  , update = { 
		  	WON : req.body.WON,
			bill_amount : req.body.bill_amount,
			billing_date : req.body.billing_date,
			bil_desc_id : req.body.bil_desc_id,
			CREATED_BY : req.body.CREATED_BY,
			CREATED_ON : req.body.CREATED_ON,			
			UPDATED_BY : req.body.UPDATED_BY,
			UPDATED_ON : req.body.UPDATED_ON,
		  }
		  , options = { multi: true };

		Fpbilling.update(conditions, update, options, callback);

		function callback (err, numAffected) {
		  if (err)
				res.send(err);
			getFpbillings(res);
		};																
		
	});

//***************************************END OF FPBILLING************************************************


//***************************************START OF Billdescrips************************************************
	app.get('/api/billdescrips', function(req, res) {
		getBilldescrips(res);
	});	
	
	app.get('/api/billdescrips/:internalid/:rnd', function(req, res) {		
		getBilldescripsByInternalID(req,res);
	});
	
	app.delete('/api/billdescrips/:billdescrip_id', function(req, res) {
		console.log(req.params.billdescrip_id);
		Billdescrips.remove({
			_id : req.params.billdescrip_id
		}, function(err, todo) {
			if (err)
				res.send(err);
			getBilldescrips(res);
		});
	});

	app.post('/api/billdescrips', function(req, res) {
		console.log(req.body);
		Billdescrips.create({
			TYPE : req.body.TYPE,
			DESCRIPTION : req.body.DESCRIPTION,			
			CREATED_BY : req.body.CREATED_BY,
			CREATED_WHEN : req.body.CREATED_WHEN,			
			UPDATED_BY : req.body.UPDATED_BY,
			UPDATED_WHEN : req.body.UPDATED_WHEN,
			done : false
		}, function(err, todo) {
			if (err)
				res.send(err);
			res.json(true);
		});
	});

	app.post('/api/billdescrips/:internalid', function(req, res) {		
		console.log(req.body);
		console.log(req.params.internalid);
		
		var conditions = { _id : req.params.internalid }
		  , update = { 
		  	TYPE : req.body.TYPE,
			DESCRIPTION : req.body.DESCRIPTION,			
			CREATED_BY : req.body.CREATED_BY,
			CREATED_WHEN : req.body.CREATED_WHEN,			
			UPDATED_BY : req.body.UPDATED_BY,
			UPDATED_WHEN : req.body.UPDATED_WHEN,
		  }
		  , options = { multi: true };

		Billdescrips.update(conditions, update, options, callback);

		function callback (err, numAffected) {
		  if (err)
				res.send(err);
			getBilldescrips(res);
		};																
		
	});

//***************************************END OF Billdescrips************************************************
//***************************************START OF Allocation************************************************
	app.get('/api/allocations', function(req, res) {
		getAllocations(res);
	});	
	
	app.get('/api/allocations/:internalid/:rnd', function(req, res) {		
		getAllocationsByInternalID(req,res);
	});
	
	app.delete('/api/allocations/:allocation_id', function(req, res) {
		console.log(req.params.allocation_id);
		Allocation.remove({
			_id : req.params.allocation_id
		}, function(err, todo) {
			if (err)
				res.send(err);
			getAllocations(res);
		});
	});

	app.post('/api/allocations', function(req, res) {
		console.log(req.body);
		Allocation.create({
			userid : req.body.userid,
			PROJECT_CODE : req.body.PROJECT_CODE,			
			WON : req.body.WON,
			BIL_DESC_ID : req.body.BIL_DESC_ID,			
			START_DATE : req.body.START_DATE,
			END_DATE : req.body.END_DATE,
			DAILY_RATE : req.body.DAILY_RATE,
			done : false
		}, function(err, todo) {
			if (err)
				res.send(err);
			res.json(true);
		});
	});

	app.post('/api/allocations/:internalid', function(req, res) {		
		console.log(req.body);
		console.log(req.params.internalid);
		
		var conditions = { _id : req.params.internalid }
		  , update = { 
		  	userid : req.body.userid,
			PROJECT_CODE : req.body.PROJECT_CODE,			
			WON : req.body.WON,
			BIL_DESC_ID : req.body.BIL_DESC_ID,			
			START_DATE : req.body.START_DATE,
			END_DATE : req.body.END_DATE,
			DAILY_RATE : req.body.DAILY_RATE,
		  }
		  , options = { multi: true };

		Allocation.update(conditions, update, options, callback);

		function callback (err, numAffected) {
		  if (err)
				res.send(err);
			getAllocations(res);
		};																
		
	});

//***************************************END OF Allocation************************************************
    




























































	// get all todos
	app.get('/api/todos', function(req, res) {
		// use mongoose to get all todos in the database
		getTodos(res);
	});

	// create todo and send back all todos after creation
	app.post('/api/todos', function(req, res) {
		// create a todo, information comes from AJAX request from Angular
		Todo.create({
			application : req.body.application,
			userid : req.body.userid,
			password : req.body.password,
			done : false
		}, function(err, todo) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			getTodos(res);
		});

	});

	// update todo and send back all todos after creation
	app.post('/api/todos/:todo_id', function(req, res) {
		
		console.log(req.params.todo_id);
		


		var conditions = { _id : req.params.todo_id }
		  , update = { application: req.body.application,userid: req.body.userid,password: req.body.password}
		  , options = { multi: true };

		Todo.update(conditions, update, options, callback);

		function callback (err, numAffected) {
		  if (err)
				res.send(err);

			getTodos(res);
		};																
		// Todo.findOne({ _id : req.params.todo_id }, function (err, doc){
		//   doc.application = req.body.application;
		//   doc.userid = req.body.userid;
		//   doc.password = req.body.password;

		//   doc.save();
		//   done : true;
		//   if (err)
		// 		res.send(err);
		// 	//getTodoByID(req,res);
			
		// });
		// getTodos(res);
	});

	// delete a todo
	app.delete('/api/todos/:todo_id', function(req, res) {
		Todo.remove({
			_id : req.params.todo_id
		}, function(err, todo) {
			if (err)
				res.send(err);

			getTodos(res);
		});
	});


	// get a single todo
	//app.get('/api/todos/:todo_id', function(req, res) {
	app.get('/api/todos/:todo_id/:rnd', function(req, res) {
	 	console.log("todo.application");
	 	//console.log(req.params.todo_id);
	// Todo.find({
	// 		_id : req.params.todo_id
	// 	}, function(err, todo) {
	// 		if (err)
	// 			res.send(err);

	// 		res.json(todo);
	// 	});

		getTodoByID(req,res);
	});

	function getTodoByID(req,res){
	Todo.find({_id : req.params.todo_id},function(err, todo) {

		res.header("Access-Control-Allow-Origin", "*");
      	res.header("Access-Control-Allow-Headers", "X-Requested-With");


			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(todo); // return all todos in JSON format
		});
};

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};