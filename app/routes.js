var Todo = require('./models/todo');

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

module.exports = function(app) {

	// api ---------------------------------------------------------------------
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