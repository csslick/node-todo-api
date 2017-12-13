var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

// 몽구스
var {mongoose} = require('./db/mongoose');

// 스키마 모델
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

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

// Read: GET /todos/id
// _id로 검색
app.get('/todos/:id', (req, res) => {
	var id = req.params.id;

	// Valid id using isValid
	if(!ObjectID.isValid(id)){
		return res.status(404).send('Error 404');
	}

	// findById
	Todo.findById(id).then((result) => {
		if(!result){
			return res.status(404).send('Error 404');
		}

		res.send(result);
	}).catch((e) => {
		res.status(400).send('Error 400');
	});
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

// Delete
app.delete('/todos/:id', (req, res) => {

	// Get id
	var id = req.params.id;
	console.log(id);

	// validate id -> not valid? return 404(요청 형식 오류)
	if(!ObjectID.isValid(id)){
		return res.status(404).send('404 error');
	}

	Todo.findByIdAndRemove(id).then((result) => {
		if(!result){
			return res.status(404).send('404 error');
		}

		res.send(result);
	}).catch((e) => {
		res.status(400).send('400 error?');
		console.log('400 error');
	});


	// Todo.findByIdAndRemove(id, (err, result) => {

	// 	if(err || id == undefined){
	// 		return res.status(400).send('400 error - no request');
	// 	}

	// 	// 조회한 데이터 없음
	// 	if(!result){
	// 		return res.status(404).send('404 error');
	// 	}
	// 	res.send(result);
	// 	console.log(result);
	// })

});




/*  --------------------- */
app.listen(port, () => {
	console.log(`Server Running at ${port}`);
});


