var express = require('express');
var bodyParser = require('body-parser');

// 몽구스
var {mongoose} = require(__dirname + '/db/mongoose');

// 스키마 모델
var {Todo} = require(__dirname + '/models/todo');
var {User} = require(__dirname + '/models/user');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Create
app.post('/todos', (req, res) => {
	// console.log(req.body);
	var todo = new Todo({
		text: req.body.text
	});

	// 요청한 JSON을 저장(postman에서 테스트 후 로보몽고에서 확인)
	todo.save((err, docs) => {
		if(err){ 
			res.status(400).send('Save Error\n' + err);
		} else{
			res.send(docs);
		}
	});
});

// Read
app.get('/todos', (req, res) => {
	Todo.find(function(err, todos){
		if(err) {
			res.status(400).send(err);
		} else{
			res.send(todos);
		}
	});
});

// GET /todos/id
app.get('/todos/:id', (req, res) => {
	var id = req.params.id;

	// Valid id using isValid
		// 404 - send back empty send

		// findById
			// success
				// if todo - send it back
				//	if no todo - send back 404 width empty body
			// error
				// 400 - and send empty body back
});



// Read
app.get('/users', (req, res) => {
	User.find(function(err, result){
		if(err) {
			res.status(400).send(err);
		} else{
			res.send(result);
		}
	});
});





app.listen(3000, () => {
	console.log('Server Running at 3000')
});


