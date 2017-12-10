// ObjectID 객체로 _ID 생성
const {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) =>{

	if(err){
		return console.log('Unable to connect to DB');
	}
	console.log('Connected to DB');

	// 변경(update)
	// db.collection('todos').findOneAndUpdate(
	// 	{
	// 		_id: new ObjectID('5a2d7220440f9a3b698adcf2')
	// 	}, 
	// 	{ 
	// 			// $ 찾은 자료의 complete 속성만 변경
	// 			$set:{ completed: true }
	// 	},
	// 	(err, result) => {
	// 		console.log(result);
	// 	}
	// );


	// 나이값 증가
	db.collection('Users').findOneAndUpdate(
		{
			_id: ObjectID('5a2c7ba7b5657c0c64caa6b6')
		}, 
		{
			$set: { name: 'Lee'},	// 변경
			$inc: { age: 1 }	// 1씩 값 증가
		},
		(err, result) => {
			console.log(result);
		}
	);

	// db.close();
});



