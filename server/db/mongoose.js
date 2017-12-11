var mongoose = require('mongoose');

mongoose.Promise = global.Promise;	// ES6(node.js) Promise 사용(콜백 대체)
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};

// module.exports = {
// 	mongoose: mongoose
// }