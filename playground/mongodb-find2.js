// ObjectID 객체로 _ID 생성
const {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) =>{

	if(err){
		return console.log('Unable to connect to DB');
	}
	console.log('Connected to DB');


	// 값이 있는지 확인하기 = 데이터 개수 조회 - count 
	// db.collection('todos').find().count((err, count) => {
	// 	if(err) { 
	// 		return console.log("Unable to fetch data", err);
	// 	} 	
	// 	console.log(`todos count: ${count}`);

	// });


	// 내용이 일치하는 데이터를 조회하는 경우
	db.collection('Users').find({name: 'Kwon'}).toArray((err, docs) => {

		console.log(docs);
	});


	db.close();
});



