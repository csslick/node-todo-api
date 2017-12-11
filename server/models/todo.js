var mongoose = require('mongoose');

// 컬랙션 모델객체 정의(모델명, 스키마)
// todo 모델명은 컬랙션 이름(todos)의 단수형으로 지정하며 자동으로 컬랙션에 대입됨 
var Todo = mongoose.model('todo', {
	text: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false

	},
	completedAt: {
		type: Number,
		default: null

	}
});

module.exports = {Todo};