// const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '15a2e40fdca18b1801198933d';

// // id 형식 검사하기(mongodb 모듈 사용시- 아래의 몽구스 에러로 대체)
// if(!ObjectID.isValid(id)){
// 	console.log('올바른 ID 형식이 아닙니다.');
// }

// // 일치하는 도큐먼트 배열 검색
// Todo.find({
// 	_id: id
// }).then(function(res){
// 	console.log('Todos', res);
// });

// // 도큐먼트 하나만 검색
// Todo.findOne({
// 	_id: id
// }).then(function(res){
// 	// ID가 없으면
// 	if(!res){
// 		return console.log('Id not found');
// 	}
// 	console.log('Todos', res);
// });

// id명으로 직접 검색(findOne 축약식)
Todo.findById(id).then(function(res){
	console.log('Tood By Id', res);
})
	// 잘못된 ID 형식일 경우(valid)
	.catch(function(err){
		console.log('올바른 요청 형식이 아닙니다.\n' + err.name);
	});