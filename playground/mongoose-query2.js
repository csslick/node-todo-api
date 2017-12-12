const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');

var id = '5a2c7ba7b5657c0c64caa6b6';

// id명으로 직접 검색(findOne 축약식)
User.findById(id).then(function(res){

	if(!res){
		return console.log('User not found');
	}
	console.log('User By Id', res);

}).catch(function(err){

		console.log('올바른 요청 형식이 아닙니다.\n' + err.name);
	});
