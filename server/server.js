var express = require('express');
var bodyParser = require('body-parser');

// 몽구스
var {mongoose} = require(__dirname + '/db/mongoose');

// 스키마 모델
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

// app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// post 요청 
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




app.listen(3000, () => {
	console.log('Server Running at 3000')
});


