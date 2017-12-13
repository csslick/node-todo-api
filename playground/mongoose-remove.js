const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// // 전부 삭제
// Todo.remove({}, (err, result) => {
// 	if(err){
// 		return console.log('Remove Error');
// 	}
// 	console.log(result);
// });

// Todo.findOneAndRemove({_id: '5a317a2ad12cd0c00c521cf4'}).then((todo) => {
	
// });

Todo.findByIdAndRemove('5a317a2ad12cd0c00c521cf4').then((todo) => {
	console.log(todo.result);
});