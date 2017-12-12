var mongoose = require('mongoose');

// 주의: 실제 db의 컬랙션 이름은 반드시 소문자로!!
var User = mongoose.model('user', {
	name: {
		type: String,
		required: true,
		trim: true,
		minlength: 1
	},
	age: {
		type: Number,
		default: null
	},
	location: {
		type: String
	}
});

module.exports = {User};