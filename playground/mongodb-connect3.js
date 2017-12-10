// const MongoClient = require('mongodb').MongoClient;

// ES6 비구조화 할당(destrutoring) 방식으로 객체 가져오기
// const {MongoClient} = require('mongodb');

// ObjectID 객체로 _ID 생성
const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log('obj = ', obj);


var url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) =>{

	if(err){
		return console.log('DB Connect Error');
	}

	console.log('Connected MongoDB Server');

	// db.collection('todos').insert({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if(err){
	// 		console.log('Unable to insert todo');
	// 	} else{
	// 		console.log(result);
	// 	}
	// });

	// insert new doc into Users (name, age, location)
	db.collection('Users').insert({
		name: 'Kwon',
		age: '40',
		location: 'Seoul'
	}, (err, result) => {
		if(err) {
			return console.log('error');
		}

		// console.log(result.ops);

		// _id는 고유값이며 time stamp가 수록되어 있다. 
		console.log(result.ops[0]._id); 
		console.log(result.ops[0]._id.getTimestamp()); 
	});

	db.close();

});