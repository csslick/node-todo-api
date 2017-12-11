var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// 컬랙션 모델객체 정의(모델명, 스키마)
// todo 모델명은 컬랙션 이름(todos)의 단수형으로 지정하며 자동으로 컬랙션에 대입됨 
var Todo = mongoose.model('todo', {
	text: {
		type: String	// 내용
	},
	completed: {
		type: Boolean	// 수행했는지 여부

	},
	completedAt: {
		type: Number	// 언제

	}
});

// 도큐먼트 인스턴스 셍성
// var newTodo = new Todo({
// 	text: 'Cook dinner'
// });

// newTodo.save((err, docs) => {
// 	if(err) {
// 		return console.log('Unable to save todo', err);
// 	}	

// 	console.log(docs);
// });

// 도큐먼트 생성2
var newTodo2 = new Todo({
	text: 'Feed the dog',
	completed: true,
	completedAt: 123
});

newTodo2.save((err, docs) => {
	if(err) return console.log('Unable to save todo', err);
	console.log(docs);
});



