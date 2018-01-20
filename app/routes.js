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
var Allocationdetail=require('./models/allocationdetail');
var Timesheet = require('./models/timesheet');
var Freeze=require('./models/freeze');
const excel = require('node-excel-export');
var Week=require('./models/week');
var Period=require('./models/period');

var alasql = require('alasql');


var encrdecr=require('../security/encrdecr.js');
 
var hw = encrdecr.encrypt("hello world");

const styles = {
			  headerDark: {
			    fill: {
			      fgColor: {
			        rgb: 'FF000000'
			      }
			    },
			    font: {
			      color: {
			        rgb: 'FFFFFFFF'
			      },
			      sz: 14,
			      bold: true,
			      underline: true
			    }
			  },
			  cellPink: {
			    fill: {
			      fgColor: {
			        rgb: 'FFFFCCFF'
			      }
			    }
			  },
			  cellGreen: {
			    fill: {
			      fgColor: {
			        rgb: 'FF00FF00'
			      }
			    }
			  }
			};
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

 function $N(value, ifnull) {
    if (value === null || value === undefined)
      return ifnull;
    return value;
 }

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
	User.findOne({_id : req.params.user_id},function(err, user) {
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
	User.findOne({userid : req.params.userloginid},function(err, user) {
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
	Won.findOne({WON : req.params.uniqueid},function(err, won) {
		res.header("Access-Control-Allow-Origin", "*");
      	res.header("Access-Control-Allow-Headers", "X-Requested-With");
			if (err)
				res.send(err)
			res.json(won); 
		});
};
function getWonByInternalID(req,res){
	console.log(req.params.internalid);
	Won.findOne({_id : req.params.internalid},function(err, won) {
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
	Projectdetail.findOne({PROJECT_CODE : req.params.uniqueid},function(err, projectdetail) {
		res.header("Access-Control-Allow-Origin", "*");
      	res.header("Access-Control-Allow-Headers", "X-Requested-With");
			if (err)
				res.send(err)
			res.json(projectdetail); 
		});
};
function getProjectdetailByInternalID(req,res){
	console.log(req.params.internalid);
	Projectdetail.findOne({_id : req.params.internalid},function(err, projectdetail) {
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
	/*Fpbilling.find(function(err, fpbilling) {		
			res.header("Access-Control-Allow-Origin", "*");
      		res.header("Access-Control-Allow-Headers", "X-Requested-With");
			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)
			res.json(fpbilling); 
		}).sort( { WON: 1 } );*/

		 Fpbilling.find().
		  populate('WON'). 
		  exec(function (err, story) {
		    if (err) return res.send(err);
		    //res.json(story);
		   // console.log('The author is %s', story.GEO_ID.LOCATION);
		    res.json(story);
		    //console.log('The author is %s', Won.geo.LOCATION);
		    // prints "The author is Ian Fleming"
		    
		   // console.log('The authors age is %s', story.author.age);
		    // prints "The authors age is null'
		  })
};

function getFpbillingsByInternalID(req,res){
	console.log(req.params.internalid);
	Fpbilling.findOne({_id : req.params.internalid},function(err, fpbilling) {
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
	Billdescrips.findOne({_id : req.params.internalid},function(err, billdescrip) {
		res.header("Access-Control-Allow-Origin", "*");
      	res.header("Access-Control-Allow-Headers", "X-Requested-With");
			if (err)
				res.send(err)
			res.json(billdescrip); 
		});
};
//*********************************SECTION ALLOCATION*************************************************************
function getAllocations(res){
	/*Allocation.find(function(err, allocation) {		
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
		*/

		Allocation.find().
		  populate('PROJECT_CODE').
		  populate('userid').	
		  populate('WON'). 
		  populate('BIL_DESC_ID').
		  exec(function (err, story) {
		    if (err) return res.send(err);
		    var allocationdata=[];
		    allocationdata=story;
		    //res.json(story);		   

		    resAgregatedOnsite = alasql('SELECT * FROM ? arrTwo '+
		    						'WHERE arrTwo.userid IS NOT NULL AND '+
		    						'arrTwo.PROJECT_CODE IS NOT NULL AND '+
		    						'arrTwo.WON IS NOT NULL AND '+
		    						'arrTwo.BIL_DESC_ID IS NOT NULL',
						[allocationdata]); 
		    res.send(resAgregatedOnsite);

		  })

};

function getAllocationsByInternalID(req,res){
	console.log(req.params.internalid);
	Allocation.findOne({_id : req.params.internalid},function(err, allocation) {
		res.header("Access-Control-Allow-Origin", "*");
      	res.header("Access-Control-Allow-Headers", "X-Requested-With");
			if (err)
				res.send(err)
			res.json(allocation); 
		});
};
function getAllocationdetails(res){
	Allocation.find(function(err, allocation) {		
			res.header("Access-Control-Allow-Origin", "*");
      		res.header("Access-Control-Allow-Headers", "X-Requested-With");
			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
			{
				console.log(err);
				res.send(err)
			}
			allocationdata=allocation; 
			console.log(allocationdata.length);
			getalloProject(res,allocationdata);
			
		}).sort( { userid: 1 } );
};
function getalloProject(res,allocationdata){			
			
			var projectdetaildata;
			Projectdetail.find(function(err, projectdetail) {		
			res.header("Access-Control-Allow-Origin", "*");
      		res.header("Access-Control-Allow-Headers", "X-Requested-With");
			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				{
					res.send(err)
				}
			    projectdetaildata=projectdetail; 
				console.log(projectdetaildata.length); 

				getalloProjectUser(res,allocationdata,projectdetaildata);

			});
};
function getalloProjectUser(res,allocationdata,projectdetaildata){	
	var userdetaildata;
	User.find(function(err, users) {
			res.header("Access-Control-Allow-Origin", "*");
      		res.header("Access-Control-Allow-Headers", "X-Requested-With");
			if (err)
				res.send(err)
			userdetaildata=users; // return all todos in JSON format
			getalloProjectUserWon(res,allocationdata,projectdetaildata,userdetaildata);
				
		
		}).sort( { firstname: 1 } );

}
function getalloProjectUserWon(res,allocationdata,projectdetaildata,userdetaildata){
	var wondetaildata;
	Won.find(function(err, won) {
		console.log('called getWonMasters');
			res.header("Access-Control-Allow-Origin", "*");
      		res.header("Access-Control-Allow-Headers", "X-Requested-With");
			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)
			wondetaildata=won;	
			getalloProjectUserWonBill(res,allocationdata,projectdetaildata,userdetaildata,wondetaildata);
			

		});
}
function getalloProjectUserWonBill(res,allocationdata,projectdetaildata,userdetaildata,wondetaildata){
	var billdescripsdata;
	Billdescrips.find(function(err, billdescrip) {		
			res.header("Access-Control-Allow-Origin", "*");
      		res.header("Access-Control-Allow-Headers", "X-Requested-With");
			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)
			billdescripsdata=billdescrip; 
			
			getalloProjectUserWonBillAll(res,allocationdata,projectdetaildata,userdetaildata,wondetaildata,billdescripsdata);
				
		});
}
function getalloProjectUserWonBillAll(res,allocationdata,projectdetaildata,userdetaildata,wondetaildata,billdescripsdata){
	var i;
				var element = [];
				for(i = 0; i < allocationdata.length; i++) {
		        allocationdetail = new Allocationdetail();
		        allocationdetail.PROJECT_CODE = allocationdata[i].PROJECT_CODE;

		        projdata=projectdetaildata.find(o => o._id == allocationdata[i].PROJECT_CODE);
		        allocationdetail.PROJECT_NAME =projdata===undefined?'':projdata.PROJECT_CODE+'-'+projdata.PROJECT_NAME;
		       
		        allocationdetail.userid = allocationdata[i].userid;

		        userdesc=userdetaildata.find(o => o._id == allocationdata[i].userid);
		        allocationdetail.username = userdesc===undefined?'': userdesc.firstname+ ' ' +userdesc.lastname;
		        allocationdetail.useremployeeid =userdesc===undefined?'':userdesc.employeeid;
		        allocationdetail.WON=allocationdata[i].WON;
		        allocationdetail.WONDESC =wondetaildata.find(o => o.WON == allocationdata[i].WON)===undefined ? '' :wondetaildata.find(o => o.WON == allocationdata[i].WON).WON_DESC;
		        allocationdetail.BIL_DESC_ID=allocationdata[i].BIL_DESC_ID;
		        
		        billdesc=billdescripsdata.find(o => o._id == allocationdata[i].BIL_DESC_ID);
		        allocationdetail.BIL_DESC=(billdesc===undefined)?'':billdesc.DESCRIPTION;
		        allocationdetail.BILLTYPE=(billdesc===undefined)?'':billdesc.TYPE;
undefined
		        allocationdetail.START_DATE=allocationdata[i].START_DATE;
		        allocationdetail.END_DATE=allocationdata[i].END_DATE;
		        allocationdetail.DAILY_RATE=allocationdata[i].DAILY_RATE;
		        allocationdetail._id=allocationdata[i]._id;
		        element.push(allocationdetail)
		    	}
		    	res.json(element);

}

//*********************************SECTION TIMESHEET**************************************************
function getAllocationByUserIDandDate(req,res){
    var userId = req.params.userId;
    var queryDate = new Date(req.params.startDateofWeek);
    var condition = {
        'userid': userId,
		'START_DATE':{ $gte: queryDate },
        'END_DATE':{$lte : queryDate}
    };
   
  // ,
    //    'END_DATE':{$lte : new Date("2018-07-01T16:00:00.000Z")}
    Allocation.find(condition,function(err, allocation) {
    	//Allocation.find({"START_DATE": {"$gte": new Date("2017-12-31T16:00:00.000Z")}},function(err, allocation2) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err);
        var validAllocation = allocation;
        console.log(allocation);
        /*allocation.forEach(function(item) {
			//check if queryDate falls between any allocation start date and end date
			if(queryDate >= new Date(item.START_DATE) && queryDate <= new Date(item.END_DATE))
			{
				validAllocation = item;
			}
        });*/

        

        if(validAllocation)
		{
            Allocation.find({_id : validAllocation._id}).populate('PROJECT_CODE').exec(function(err, projectAllocation) {
                console.log(JSON.stringify(projectAllocation));
                res.json(projectAllocation);
            })
		}
		else {
            res.json(validAllocation);
        }
    });
};

function getTimesheetByUserIDandDate(req,res){
    console.log(req.params.userId);
    console.log(req.params.startDateofWeek);
    Timesheet.find({userId : req.params.userId, startDateofWeek: req.params.startDateofWeek},function(err, timesheet) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)
        res.json(timesheet); // return all todos in JSON format
    });
};
//*********************************SECTION FREEZE**************************************************
function getFreezes(res){
	Freeze.find(function(err, freeze) {		
			res.header("Access-Control-Allow-Origin", "*");
      		res.header("Access-Control-Allow-Headers", "X-Requested-With");
			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)
			res.json(freeze); 
		});
};

function getActiveFreezeDates(res){
    var condition = {
        'Freeze': true
    };

    Freeze.find(condition,function(err, freeze) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err);
        console.log(freeze);
        res.json(freeze);
    });
};
//*********************************SECTION WEEK AND PERIOD**************************************************
function getWeeks(res){
	Week.find(function(err, week) {		
			res.header("Access-Control-Allow-Origin", "*");
      		res.header("Access-Control-Allow-Headers", "X-Requested-With");
			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)
			res.json(week); 
		}).sort( { WEEKSTARTDATE: 1 } );
};

function getPeriods(res){
	Period.find(function(err, week) {		
			res.header("Access-Control-Allow-Origin", "*");
      		res.header("Access-Control-Allow-Headers", "X-Requested-With");
			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)
			res.json(week); 
		}).sort( { WEEKSTARTDATE: 1 } );
};
//*********************************SECTION Report**************************************************
function getRptFPBilling(res,queryStartDate,queryEndDate,displayperiod,displaystart,displayend,condition,conditionCoverSheet){
	Fpbilling
		  .find(condition)
		  .populate({
			path:     'WON',			
			populate: { path:  'OWNER_ID',
				    model: 'Users' }
		  }	

		  ).sort( { billing_date: 1 } )
		  .exec(function(err, data){
		    if (err) return handleError(err);
		    //res.json(data);

		   billingdata = alasql('SELECT * FROM ? arrTwo '+
		    						'WHERE arrTwo.WON IS NOT NULL AND '+
		    						'arrTwo.WON.OWNER_ID IS NOT NULL '
		    						,
						[data]); 

		   // billingdata=data;
		    //res.json(billingdata);
		    var result = [];
				for(i = 0; i < billingdata.length; i++) {				  
				    result.push({'InvoiceNumber': '', 
				    	'WON': billingdata[i].WON.WON,
				    	'WONDescription': billingdata[i].WON.WON_DESC,
				    	'WONType': billingdata[i].WON.WON_TYPE,
				    	'Location': billingdata[i].WON.OFF_ON,
				    	'TeamOwner': billingdata[i].WON.OWNER_ID.firstname+' ' +billingdata[i].WON.OWNER_ID.lastname,
				    	'BillingDescription': billingdata[i].bil_desc_id,
				    	'BillingDate': billingdata[i].billing_date,
				    	'InvoiceOwner': 'KITS',
				    	'Total': billingdata[i].bill_amount

				    });
				}				
			getRptCoverSheetonOff(res,queryStartDate,queryEndDate,displayperiod,displaystart,displayend,condition,conditionCoverSheet,result);	
		    
			
		});
};

function getRptCoverSheetonOff(res,queryStartDate,queryEndDate,displayperiod,displaystart,displayend,condition,conditionCoverSheet,result){
	Timesheet.find(conditionCoverSheet).populate('userId').populate({
				path:     'allocationId',			
				//populate: ({ path:  'WON',model: 'Wons',match: { OFF_ON: { $eq: "Onsite" }},
				populate: ({ path:  'WON',model: 'Wons',
									populate:({path:  'OWNER_ID',model: 'Users'}) })
				
							
			  }).populate({
				path:     'allocationId',			
				populate: ({ path:  'BIL_DESC_ID',model: 'Billdescrips' })
			  }).populate({
				path:     'allocationId',			
				populate: ({ path:  'PROJECT_CODE',model: 'Projectdetails' })
			  }).//.populate({path:'allocationId.WON.OWNER_ID',populate: ({ path:  'OWNER_ID',model: 'Users' })}). 
			exec(function(err, data) {
				//res.header("Access-Control-Allow-Origin", "*");
      			//res.header("Access-Control-Allow-Headers", "X-Requested-With");

				// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err) return handleError(err);

			/*onsitedata = alasql('SELECT * FROM ? arrTwo '+
		    						'WHERE arrTwo.allocationId IS NOT NULL AND '+
		    						'arrTwo.allocationId.WON IS NOT NULL AND ' +
		    						'arrTwo.allocationId.BIL_DESC_ID IS NOT NULL AND ' +
		    						'arrTwo.allocationId.WON IS NOT NULL AND ' +
		    						'arrTwo.allocationId.userId IS NOT NULL AND ' +
		    						'arrTwo.WON.OWNER_ID IS NOT NULL ' 
		    						,
						[data]); */

			onsitedata = alasql('SELECT * FROM ? arrTwo '+
		    						'WHERE arrTwo.allocationId IS NOT NULL AND '+ 
		    						'arrTwo.allocationId.WON IS NOT NULL AND '+
		    						'arrTwo.allocationId.BIL_DESC_ID IS NOT NULL AND '+
		    						'arrTwo.allocationId.WON IS NOT NULL AND '+
		    						'arrTwo.userId IS NOT NULL AND '+
		    						'arrTwo.allocationId.WON.OWNER_ID IS NOT NULL ' 
		    						,
						[data]);			

			//onsitedata=data;
			
			var resultOnsite = [];
			var resultOffshore = [];
			var resAgregatedOnsite=[];
			var resAgregatedOffshore=[];
			//res.json(onsitedata);
			for(i = 0; i < onsitedata.length; i++) {
				if(onsitedata[i].allocationId.WON.OFF_ON==='Onsite')  {
				resultOnsite.push({'InvoiceNumber': '', 
				    	'WON': onsitedata[i].allocationId.WON.WON,
				    	'BillingDescription': onsitedata[i].allocationId.BIL_DESC_ID.DESCRIPTION,
				    	'TeamOwner': onsitedata[i].allocationId.WON.OWNER_ID.firstname+' '+onsitedata[i].allocationId.WON.OWNER_ID.middlename +' '+onsitedata[i].allocationId.WON.OWNER_ID.lastname,
				    	'Member': onsitedata[i].userId.firstname+' '+ onsitedata[i].userId.middlename +' '+onsitedata[i].userId.lastname,
				    	'InvoiceOwner': 'KITS',
				    	'RatePerDay': onsitedata[i].allocationId.DAILY_RATE,
				    	'NoOfDays': $N(onsitedata[i].projectSundayHour,0)+
				    				$N(onsitedata[i].projectMondayHour,0)+
				    				$N(onsitedata[i].projectTuesdayHour,0)+
				    				$N(onsitedata[i].projectWednesdayHour,0)+
				    				$N(onsitedata[i].projectThursdayHour,0)+
				    				$N(onsitedata[i].projectFridayHour,0)+
				    				$N(onsitedata[i].projectSaturdayHour,0)

				    	});	
					}
					else if(onsitedata[i].allocationId.WON.OFF_ON==='Offshore')  {
					resultOffshore.push({'InvoiceNumber': '', 
				    	'WON': onsitedata[i].allocationId.WON.WON,
				    	'BillingDescription': onsitedata[i].allocationId.BIL_DESC_ID.DESCRIPTION,
				    	'TeamOwner': onsitedata[i].allocationId.WON.OWNER_ID.firstname+' '+onsitedata[i].allocationId.WON.OWNER_ID.middlename +' '+onsitedata[i].allocationId.WON.OWNER_ID.lastname,
				    	'Member': onsitedata[i].userId.firstname+' '+ onsitedata[i].userId.middlename +' '+onsitedata[i].userId.lastname,
				    	'InvoiceOwner': 'KITS',
				    	'RatePerDay': onsitedata[i].allocationId.DAILY_RATE,
				    	'NoOfDays': $N(onsitedata[i].projectSundayHour,0)+
				    				$N(onsitedata[i].projectMondayHour,0)+
				    				$N(onsitedata[i].projectTuesdayHour,0)+
				    				$N(onsitedata[i].projectWednesdayHour,0)+
				    				$N(onsitedata[i].projectThursdayHour,0)+
				    				$N(onsitedata[i].projectFridayHour,0)+
				    				$N(onsitedata[i].projectSaturdayHour,0)

				    	});	
					}
				}
				//res.json(resultOnsite);

				resAgregatedOnsite = alasql('SELECT InvoiceNumber,WON,BillingDescription,'+
					'TeamOwner,Member,InvoiceOwner,RatePerDay, SUM(NoOfDays) AS TotalNoOfDays,'+
					'(RatePerDay * SUM(NoOfDays)) AS Total FROM ? GROUP BY '+
					'InvoiceNumber,WON,BillingDescription,TeamOwner,Member,InvoiceOwner,RatePerDay',
						[resultOnsite]); 
				//console.log(resAgregatedOnsite);

				resAgregatedOffshore = alasql('SELECT InvoiceNumber,WON,BillingDescription,'+
					'TeamOwner,Member,InvoiceOwner,RatePerDay, SUM(NoOfDays) AS TotalNoOfDays,'+
					'(RatePerDay * SUM(NoOfDays)) AS Total FROM ? GROUP BY '+
					'InvoiceNumber,WON,BillingDescription,TeamOwner,Member,InvoiceOwner,RatePerDay',
						[resultOffshore]); 
				//res.json(resAgregatedOffshore);

				//start of excel report	 
			 getAllReports(res,displayperiod,displaystart,displayend,result,resAgregatedOnsite,resAgregatedOffshore);
			});
};

function getAllReports(res,displayperiod,displaystart,displayend,result,resAgregatedOnsite,resAgregatedOffshore){
	//Array of objects representing heading rows (very top) 
			const heading = [
			  [{value: 'Fixed Price Billing', style: styles.headerDark}],
			  ['Billing Period:', displayperiod],
			  ['Start Date:',displaystart],  // <-- It can be only values 
			  ['End Date:',displayend],
			  ['']
			];

			const headingCoverSheetOnsite = [
			  [{value: 'T&M Billing Onsite', style: styles.headerDark}],
			  ['Billing Period:', displayperiod],
			  ['Start Date:',displaystart],  // <-- It can be only values 
			  ['End Date:',displayend],
			  ['']
			];

			const headingCoverSheetOffshore = [
			  [{value: 'T&M Billing Offshore', style: styles.headerDark}],
			  ['Billing Period:', displayperiod],
			  ['Start Date:',displaystart],  // <-- It can be only values 
			  ['End Date:',displayend],
			  ['']
			];
			 
			//Here you specify the export structure 
			const specification = {
			 
			  InvoiceNumber: {
			    displayName: 'Invoice Number',
			    headerStyle: styles.headerDark,
			    width: 100
			  },
			  WON: {
			    displayName: 'WON',
			    headerStyle: styles.headerDark,
			    width: 100
			  },
			  WONDescription: {
			    displayName: 'WON Description',
			    headerStyle: styles.headerDark,
			    width: 100
			  },
			  WONType: {
			    displayName: 'WON Type',
			    headerStyle: styles.headerDark,
			    width: 100
			  },
			  Location: {
			    displayName: 'Location',
			    headerStyle: styles.headerDark,
			    width: 100
			  },
			  TeamOwner: {
			    displayName: 'Team Owner',
			    headerStyle: styles.headerDark,
			    width: 100
			  },
			  BillingDescription: {
			    displayName: 'Billing Description',
			    headerStyle: styles.headerDark,
			    width: 100
			  },
			  BillingDate: {
			    displayName: 'Billing Date',
			    headerStyle: styles.headerDark,
			    width: 100
			  },
			  InvoiceOwner: {
			    displayName: 'Invoice Owner',
			    headerStyle: styles.headerDark,
			    width: 100
			  },
			  Total: {
			    displayName: 'Total(GBP)',
			    headerStyle: styles.headerDark,
			    width: 100
			  }
			};
			
			const specificationCoverOnOff = {
			  InvoiceNumber: {
			    displayName: 'Invoice Number',
			    headerStyle: styles.headerDark,
			    width: 100
			  },
			  WON: {
			    displayName: 'WON',
			    headerStyle: styles.headerDark,
			    width: 100
			  },
			  TeamOwner: {
			    displayName: 'Team Owner',
			    headerStyle: styles.headerDark,
			    width: 100
			  },
			  Member: {
			    displayName: 'Member',
			    headerStyle: styles.headerDark,
			    width: 100
			  },
			  InvoiceOwner: {
			    displayName: 'Invoice Owner',
			    headerStyle: styles.headerDark,
			    width: 100
			  },
			  RatePerDay: {
			    displayName: 'Rate Per Day',
			    headerStyle: styles.headerDark,
			    width: 100
			  },
			  TotalNoOfDays: {
			    displayName: 'No. of Days',
			    headerStyle: styles.headerDark,
			    width: 100
			  },
			  Total: {
			    displayName: 'Total',
			    headerStyle: styles.headerDark,
			    width: 100
			  }
			};

			// The data set should have the following shape (Array of Objects) 
			// The order of the keys is irrelevant, it is also irrelevant if the 
			// dataset contains more fields as the report is build based on the 
			// specification provided above. But you should have all the fields 
			// that are listed in the report specification 
			const dataset = result;
			const datasetresAgregatedOnsite=resAgregatedOnsite;
			const datasetresAgregatedOffshore=resAgregatedOffshore;

			/*[
			  {customer_name: 'IBM', status_id: 1, note: 'some note', misc: 'not shown'},
			  {customer_name: 'HP', status_id: 0, note: 'some note'},
			  {customer_name: 'MS', status_id: 0, note: 'some note', misc: 'not shown'}
			]*/
			 
			// Define an array of merges. 1-1 = A:1 
			// The merges are independent of the data. 
			// A merge will overwrite all data _not_ in the top-left cell. 
			const merges = [
			  { start: { row: 1, column: 1 }, end: { row: 1, column: 5 } }
			 // { start: { row: 2, column: 1 }, end: { row: 2, column: 5 } },
			  //{ start: { row: 2, column: 6 }, end: { row: 2, column: 10 } }
			]
			 
			// Create the excel report. 
			// This function will return Buffer 
			const report = excel.buildExport(
			  [ // <- Notice that this is an array. Pass multiple sheets to create multi sheet report 
			    {
			      name: 'FP Billing', // <- Specify sheet name (optional) 
			      heading: heading, // <- Raw heading array (optional) 
			      merges: merges, // <- Merge cell ranges 
			      specification: specification, // <- Report specification 
			      data: dataset // <-- Report data 
			    },
			    {
			      name: 'Cover Sheet- Onsite', // <- Specify sheet name (optional) 
			      heading: heading, // <- Raw heading array (optional) 
			      merges: merges, // <- Merge cell ranges 
			      specification: specificationCoverOnOff, // <- Report specification 
			      data: datasetresAgregatedOnsite // <-- Report data 
			    },
			    {
			      name: 'Cover Sheet - Offshore', // <- Specify sheet name (optional) 
			      heading: heading, // <- Raw heading array (optional) 
			      merges: merges, // <- Merge cell ranges 
			      specification: specificationCoverOnOff, // <- Report specification 
			      data: datasetresAgregatedOffshore // <-- Report data 
			    }
			  ]
			);
			 
			// You can then return this straight 
			res.attachment('PTS Report.xlsx'); // This is sails.js specific (in general you need to set headers) 
			return res.send(report);

		    //End of excel report

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

			teamid : req.body.selectedTeam,

			firstname : req.body.firstname,
			middlename : req.body.middlename,
			lastname : req.body.lastname,

			billingtypeid : req.body.selectedBillingType,

			teamleadid : req.body.selectedTeamLead,
			
			locid : req.body.selectedLoc,

			desigid : req.body.selectedDesig,

			isu : req.body.isu,
			usertypeid : req.body.selectedUserType,

			companyid : req.body.selectedCompany,

			mobileno : req.body.mobileno,
			deskphno : req.body.deskphno,
			geoid : req.body.selectedGeo,

			isProjectUser : req.body.isProjectUser,
			isTimeSheetUser : req.body.isTimeSheetUser,
			isProjectReportUser : req.body.isProjectReportUser,
			isTimeSheetReportUser : req.body.isTimeSheetReportUser,
			isTimeSheetUserAllocation : req.body.isTimeSheetUserAllocation,
			CREATED_BY : req.body.CREATED_BY,
			UPDATED_BY : req.body.UPDATED_BY,

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

			teamid : req.body.selectedTeam,

			firstname : req.body.firstname,
			middlename : req.body.middlename,
			lastname : req.body.lastname,

			billingtypeid : req.body.selectedBillingType,

			teamleadid : req.body.selectedTeamLead,
			
			locid : req.body.selectedLoc,

			desigid : req.body.selectedDesig,

			isu : req.body.isu,
			usertypeid : req.body.selectedUserType,

			companyid : req.body.selectedCompany,

			mobileno : req.body.mobileno,
			deskphno : req.body.deskphno,
			geoid : req.body.selectedGeo,

			isProjectUser : req.body.isProjectUser,
			isTimeSheetUser : req.body.isTimeSheetUser,
			isProjectReportUser : req.body.isProjectReportUser,
			isTimeSheetReportUser : req.body.isTimeSheetReportUser,
			isTimeSheetUserAllocation : req.body.isTimeSheetUserAllocation,
			UPDATED_BY : req.body.UPDATED_BY,
			UPDATED_ON : Date.now()
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
		getWonByInternalID(req,res);
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
			OWNER_ID : req.body.OWNER_ID,
			CREATED_BY : req.body.CREATED_BY,
			//CREATED_ON : req.body.CREATED_ON,
			UPDATED_BY : req.body.UPDATED_BY,
			//UPDATED_ON : req.body.UPDATED_ON,
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
			OWNER_ID : req.body.OWNER_ID,
			//CREATED_BY : req.body.CREATED_BY,
			//CREATED_ON : req.body.CREATED_ON,
			UPDATED_BY : req.body.UPDATED_BY,
			UPDATED_ON : Date.now(),
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
			CREATED_BY : req.body.CREATED_BY,
			UPDATED_BY : req.body.UPDATED_BY,
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
			UPDATED_BY : req.body.UPDATED_BY,
			UPDATED_ON : Date.now(),
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
			UPDATED_BY : req.body.UPDATED_BY,
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
			UPDATED_BY : req.body.UPDATED_BY,
			UPDATED_ON : Date.now(),
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
			UPDATED_BY : req.body.UPDATED_BY,
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
			UPDATED_BY : req.body.UPDATED_BY,
			UPDATED_ON : Date.now(),
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

	app.get('/api/allocationsallow/:allocationid/:userid/:startdate/:enddate', function(req, res) {
	var queryStartDate = new Date(req.params.startdate);
	var queryEndDate = new Date(req.params.enddate);	
	var queryuserid = req.params.userid;	
	var queryallocationid = req.params.allocationid;	
	var condition = { 
	 			'userid':{ $eq: queryuserid },       
				'START_DATE':{ $gte: queryStartDate },
		        'END_DATE':{$lte : queryEndDate}
		    };
 //{ $or:[ {'_id':objId}, {'name':param}, {'nickname':param} ]}
	var condition2 = {'userid':{ $eq: queryuserid },
        $or:[{'START_DATE':{ $gte: queryStartDate,$lte: queryEndDate }},{'END_DATE':{ $gte: queryStartDate,$lte: queryEndDate }}]
    	};		    		    	
		Allocation.find(condition2,function(err, allocation) {
		res.header("Access-Control-Allow-Origin", "*");
      	res.header("Access-Control-Allow-Headers", "X-Requested-With");
			if (err)
				res.send(err);
			//console.log(queryallocationid);
			//res.send(allocation);
			if(queryallocationid=='0')
				{
					//console.log(allocation.length);	
					if(allocation.length>0)
					{

						res.json(false); 
					}
					else if(allocation.length==0)
						res.json(true);
				}
			else
				{
					if(allocation.length==0)
						res.json(true);
					else if(allocation.length>0)
						{
							if(allocation[0]._id==queryallocationid)
							{	
								res.json(true);
							}
							else
								res.json(false);
						}

				}
		});
	});

	app.get('/api/allocationdetails', function(req, res) {
		getAllocationdetails(res);
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
			CREATED_BY : req.body.CREATED_BY,
			UPDATED_BY : req.body.UPDATED_BY,
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
			UPDATED_BY : req.body.UPDATED_BY,
			UPDATED_ON : Date.now(),
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

//***************************************START OF TIMESHEET************************************************
    app.get('/api/allocation/:userId/:startDateofWeek', function(req, res) {
        console.log('before call allocation by userId and date');
        getAllocationByUserIDandDate(req,res);
    });

    app.get('/api/timesheet/:userId/:startDateofWeek', function(req, res) {
        console.log('before call timesheet by userId and date');
        getTimesheetByUserIDandDate(req,res);
    });

    app.post('/api/timesheet', function(req, res) {
        // create a timesheet, information comes from AJAX request from Angular

        console.log("Timesheet Saved");
        console.log(req.body);
        Timesheet.create({
            userId : req.body.userId,
            startDateofWeek : req.body.startDate,
            endDateofWeek : req.body.endDate,
            projectCode : req.body.projectCode,
            projectSundayHour : req.body.projectSundayHour,
            projectMondayHour : req.body.projectMondayHour,
            projectTuesdayHour : req.body.projectTuesdayHour,
            projectWednesdayHour : req.body.projectWednesdayHour,
            projectThursdayHour : req.body.projectThursdayHour,
            projectFridayHour : req.body.projectFridayHour,
            projectSaturdayHour : req.body.projectSaturdayHour,
            leaveSundayHour : req.body.leaveSundayHour,
            leaveMondayHour : req.body.leaveMondayHour,
            leaveTuesdayHour : req.body.leaveTuesdayHour,
            leaveWednesdayHour : req.body.leaveWednesdayHour,
            leaveThursdayHour : req.body.leaveThursdayHour,
            leaveFridayHour : req.body.leaveFridayHour,
            leaveSaturdayHour : req.body.leaveSaturdayHour,
            allocationId : req.body.allocationId
        }, function(err, todo) {
            if (err)
                res.send(err);
            res.json(true);
        });
    });

    app.post('/api/timesheet/:timesheetId', function(req, res) {
        console.log(req.params.timesheetId);
        //console.log(req.body.selectedRole);
        //if(req.body.selectedRole==='')
        //console.log('Value Blank');
        var conditions = { _id : req.params.timesheetId }
            , update = {
            userId : req.body.userId,
            startDateofWeek : req.body.startDate,
            endDateofWeek : req.body.endDate,
            projectCode : req.body.projectCode,
            projectSundayHour : req.body.projectSundayHour,
            projectMondayHour : req.body.projectMondayHour,
            projectTuesdayHour : req.body.projectTuesdayHour,
            projectWednesdayHour : req.body.projectWednesdayHour,
            projectThursdayHour : req.body.projectThursdayHour,
            projectFridayHour : req.body.projectFridayHour,
            projectSaturdayHour : req.body.projectSaturdayHour,
            leaveSundayHour : req.body.leaveSundayHour,
            leaveMondayHour : req.body.leaveMondayHour,
            leaveTuesdayHour : req.body.leaveTuesdayHour,
            leaveWednesdayHour : req.body.leaveWednesdayHour,
            leaveThursdayHour : req.body.leaveThursdayHour,
            leaveFridayHour : req.body.leaveFridayHour,
            leaveSaturdayHour : req.body.leaveSaturdayHour,
            allocationId : req.body.allocationId
        }
            , options = { multi: true };

        Timesheet.update(conditions, update, options, callback);

        function callback (err, numAffected) {
            if (err)
                res.send(err);
            res.json(true);
        };

    });

//***************************************END OF TIMESHEET************************************************
    
//***************************************START OF Freeze************************************************
app.get('/api/freezes/:rnd', function(req, res) {
		getFreezes(res);
	});

app.get('/api/freezes', function(req, res) {
		getActiveFreezeDates(res);
	});


app.post('/api/freezes/:slno', function(req, res) {		
		console.log(req.body);
		console.log(req.params.slno);
		
		var conditions = { SLNO : req.params.slno }
		  , update = { 
		  	StartDate : req.body.StartDate,
			EndDate : req.body.EndDate,			
			Freeze : req.body.Freeze,
			UPDATED_BY : req.body.UPDATED_BY,
			UPDATED_ON : Date.now(),		
		  }
		  , options = { multi: true };

		Freeze.update(conditions, update, options, callback);

		function callback (err, numAffected) {
		  if (err)
				res.send(err);
			getFreezes(res);
		};	

		/*Freeze.create({
			SLNO : 1,
			StartDate : req.body.StartDate,
			EndDate : req.body.EndDate,			
			Freeze : req.body.Freeze,
			UPDATED_BY : req.body.UPDATED_BY,
			UPDATED_ON : Date.now(),	

			done : false
		}, function(err, todo) {
			if (err)
				res.send(err);
			res.json(true);
		});															
		*/
	});

//***************************************END OF Freeze************************************************
//***************************************START OF WEEK AND PERIOD************************************************

app.get('/api/weekdateupdates/', function(req, res) {
		
		Week.find(function(err, weekdta) {		
			//res.header("Access-Control-Allow-Origin", "*");
      		//res.header("Access-Control-Allow-Headers", "X-Requested-With");
			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
			{
				console.log(err);
				res.send(err)
			}
			weekdata=weekdta; 
			console.log(weekdta.length);
			//console.log(weekdta);
			
			for (var i in weekdata) {
 				 //console.log(weekdata[i].WEEKSTARTDATE);

 				 var conditions = { _id : weekdata[i]._id }
				  , update = { 
				  	
					WEEKENDDATE : new Date(weekdata[i].WEEKENDDATE),		
				  }
				  , options = { multi: true };

				Week.update(conditions, update, options, callback);

				function callback (err, numAffected) {
				  if (err)
						res.send(err);
					getAllocations(res);
				};
			}
		});
	});
app.get('/api/weeks', function(req, res) {
		getWeeks(res);
	});

app.get('/api/periods', function(req, res) {
		getPeriods(res);
	});

app.get('/api/perioddateupdates/', function(req, res) {
		
		Period.find(function(err, perioddta) {		
			//res.header("Access-Control-Allow-Origin", "*");
      		//res.header("Access-Control-Allow-Headers", "X-Requested-With");
			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
			{
				console.log(err);
				res.send(err)
			}
			perioddata=perioddta; 
			console.log(perioddata.length);
			//console.log(weekdta);
			
			for (var i in perioddata) {
 				 //console.log(weekdata[i].WEEKSTARTDATE);

 				 var conditions = { _id : perioddata[i]._id }
				  , update = { 
				  	
					WEEKSTARTDATE : new Date(perioddata[i].WEEKSTARTDATE),		
				  }
				  , options = { multi: true };

				Period.update(conditions, update, options, callback);

				function callback (err, numAffected) {
				  if (err)
						res.send(err);
					getAllocations(res);
				};
			}
		});
	});

//***************************************END OF Week AND PERIOD************************************************
//***************************************START OF BILLING EXTRACT-FPBILLING************************************************
app.get('/api/extractbilling/:startdate/:enddate/:displayperiod/:displaystart/:displayend', function(req, res) {
	//http://localhost:8080/api/extractfpbilling/2018-01-01T00:00:00.000Z/2018-01-01T00:00:00.000Z/P1-2017/01-01-2018/01-02-2019
	var queryStartDate = new Date(req.params.startdate);
	var queryEndDate = new Date(req.params.enddate);
	var displayperiod = req.params.displayperiod;
	var displaystart = req.params.displaystart;
	var displayend = req.params.displayend;

	var condition = {
        'billing_date':{ $gte: queryStartDate,$lte: queryEndDate }
    	};

    var conditionCoverSheet = {        
				'startDateofWeek':{ $gte: queryStartDate },
		        'endDateofWeek':{$lte : queryEndDate}
		    };	
    
		getRptFPBilling(res,queryStartDate,queryEndDate,displayperiod,displaystart,displayend,condition,conditionCoverSheet);

	}
);





























//***************************************END OF BILLING EXTRACT-FPBILLING************************************************
app.get('/api/pocwon/:qdate', function(req, res) {
	var queryDate = new Date(req.params.qdate)
	var condition = {
        'START_DATE':{ $gte: queryDate }
    };
		/*Won.find(condition,function(err, won) {
		console.log('called poc won');
			res.header("Access-Control-Allow-Origin", "*");
      		res.header("Access-Control-Allow-Headers", "X-Requested-With");

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)
			res.json(won);
		});
		*/
		/*Won.find(condition,function(err, won) {
		console.log('called poc won');
			res.header("Access-Control-Allow-Origin", "*");
      		res.header("Access-Control-Allow-Headers", "X-Requested-With");

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			//if (err)
			//	res.send(err)
			//res.json(won);
		}).populate('Geos').
		  exec(function (err, story) {
		    if (err) return handleError(err);
		    res.json(story);
		    //console.log('The author is %s', story.author.name);
		    // prints "The author is Ian Fleming"
		  });*/


		  Won.findOne({ WON: 8888}).
		  populate('GEO_ID','LOCATION'). 
		  exec(function (err, story) {
		    if (err) return res.send(err);
		    //res.json(story);
		    console.log('The author is %s', story.GEO_ID.LOCATION);
		    res.json(story.GEO_ID.LOCATION);
		    //console.log('The author is %s', Won.geo.LOCATION);
		    // prints "The author is Ian Fleming"
		    
		   // console.log('The authors age is %s', story.author.age);
		    // prints "The authors age is null'
		  })
	});	

app.get('/api/pocexcel/:startdate/:enddate', function(req, res) {
	 //api/pocexcel/:startdate/:enddate
	 //app.get('/api/todos/:todo_id/:rnd', function(req, res)
	 console.log(req.params.startdate);
	 console.log(req.params.enddate);

			// You can define styles as json object 
			// More info: https://github.com/protobi/js-xlsx#cell-styles 
			const styles = {
			  headerDark: {
			    fill: {
			      fgColor: {
			        rgb: 'FF000000'
			      }
			    },
			    font: {
			      color: {
			        rgb: 'FFFFFFFF'
			      },
			      sz: 14,
			      bold: true,
			      underline: true
			    }
			  },
			  cellPink: {
			    fill: {
			      fgColor: {
			        rgb: 'FFFFCCFF'
			      }
			    }
			  },
			  cellGreen: {
			    fill: {
			      fgColor: {
			        rgb: 'FF00FF00'
			      }
			    }
			  }
			};
			 
			//Array of objects representing heading rows (very top) 
			const heading = [
			  [{value: 'a1', style: styles.headerDark}, {value: 'b1', style: styles.headerDark}, {value: 'c1', style: styles.headerDark}],
			  ['a2', 'b2', 'c2'] // <-- It can be only values 
			];
			 
			//Here you specify the export structure 
			const specification = {
			  customer_name: { // <- the key should match the actual data key 
			    displayName: 'Customer', // <- Here you specify the column header 
			    headerStyle: styles.headerDark, // <- Header style 
			    cellStyle: function(value, row) { // <- style renderer function 
			      // if the status is 1 then color in green else color in red 
			      // Notice how we use another cell value to style the current one 
			      return (row.status_id == 1) ? styles.cellGreen : {fill: {fgColor: {rgb: 'FFFF0000'}}}; // <- Inline cell style is possible  
			    },
			    width: 120 // <- width in pixels 
			  },
			  status_id: {
			    displayName: 'Status',
			    headerStyle: styles.headerDark,
			    cellFormat: function(value, row) { // <- Renderer function, you can access also any row.property 
			      return (value == 1) ? 'Active' : 'Inactive';
			    },
			    width: '10' // <- width in chars (when the number is passed as string) 
			  },
			  note: {
			    displayName: 'Description',
			    headerStyle: styles.headerDark,
			    cellStyle: styles.cellPink, // <- Cell style 
			    width: 220 // <- width in pixels 
			  }
			}
			 
			// The data set should have the following shape (Array of Objects) 
			// The order of the keys is irrelevant, it is also irrelevant if the 
			// dataset contains more fields as the report is build based on the 
			// specification provided above. But you should have all the fields 
			// that are listed in the report specification 
			const dataset = [
			  {customer_name: 'IBM', status_id: 1, note: 'some note', misc: 'not shown'},
			  {customer_name: 'HP', status_id: 0, note: 'some note'},
			  {customer_name: 'MS', status_id: 0, note: 'some note', misc: 'not shown'}
			]
			 
			// Define an array of merges. 1-1 = A:1 
			// The merges are independent of the data. 
			// A merge will overwrite all data _not_ in the top-left cell. 
			const merges = [
			  { start: { row: 1, column: 1 }, end: { row: 1, column: 10 } },
			  { start: { row: 2, column: 1 }, end: { row: 2, column: 5 } },
			  { start: { row: 2, column: 6 }, end: { row: 2, column: 10 } }
			]
			 
			// Create the excel report. 
			// This function will return Buffer 
			const report = excel.buildExport(
			  [ // <- Notice that this is an array. Pass multiple sheets to create multi sheet report 
			    {
			      name: 'Report', // <- Specify sheet name (optional) 
			      heading: heading, // <- Raw heading array (optional) 
			      merges: merges, // <- Merge cell ranges 
			      specification: specification, // <- Report specification 
			      data: dataset // <-- Report data 
			    }
			  ]
			);
			 
			// You can then return this straight 
			res.attachment('report.xlsx'); // This is sails.js specific (in general you need to set headers) 
			return res.send(report);
	});



















































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