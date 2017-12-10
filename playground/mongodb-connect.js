const MongoClient = require('mongodb').MongoClient;

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

		console.log(result.ops);
	});

	db.close();

});