// ObjectID 객체로 _ID 생성
const {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) =>{

	if(err){
		return console.log('Unable to connect to DB');
	}
	console.log('Connected to DB');

	// deleteMany - 일치하는 모든 데이터 삭제
	// db.collection('todos').deleteMany({text: 'Eat lunch'}).then((result) => {

	// 	console.log(result.result);
	// })


	// deleteOne - 일치하는 첫번째 데이터 하나만 삭제
	// db.collection('todos').deleteOne({text: 'Eat lunch'}, (err, result) => {

	// 	console.log(result);
	// });


	// findOneAndDelete - delteOne과 같으나 데이터 확인이 용이(추천)
	// db.collection('todos').findOneAndDelete({completed: false}, (err, result) => {
	// 	console.log(result);
	// });


	/* ex */
	// db.collection('Users').deleteMany({name: 'Kwon'});


	db.collection('Users').findOneAndDelete(
		{
			_id: new ObjectID("5a2d758b440f9a3b698adf78")
		}, (err, result) => {
			
		console.log(result);	
	});


	// db.close();
});



