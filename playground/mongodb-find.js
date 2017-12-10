// ObjectID 객체로 _ID 생성
const {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) =>{

	if(err){
		return console.log('Unable to connect to DB');
	}
	console.log('Connected to DB');

	// 데이터 조회 - 전체
	// db.collection('todos').find().toArray((err, docs) => {
	// 	if (err) { 
	// 		return 'Unable to fetch todos';
	// 	}
	// 	console.log('todos');
	// 	console.log(docs);
	// });

	// 데이터 조회 - 탐색
	// db.collection('todos').find({completed: true}).toArray((err, docs) => {
	// 	if (err) { 
	// 		return 'Unable to fetch todos';
	// 	}
	// 	console.log('todos');
	// 	console.log(docs);
	// });

	// 데이터 조회  _id: ObjetID(_id코드) 객체를 통해서만 조회 가능
	db.collection('todos').find({
		_id: new ObjectID('5a2d547f440f9a3b698ace4e')
	}).toArray((err, docs) => {
		if (err) { 
			return 'Unable to fetch todos';
		}
		console.log('todos');
		console.log(docs);
	});	

	// db.close();
});



