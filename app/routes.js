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
		});
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
		console.log('called getWonMasters')
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
		//console.log(req.body.selectedRole);
		//if(req.body.selectedRole==='')
			//console.log('Value Blank');
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
		//console.log(req.body.selectedRole);
		//if(req.body.selectedRole==='')
			//console.log('Value Blank');
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