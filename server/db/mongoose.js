var mongoose = require('mongoose');

mongoose.Promise = global.Promise;	// ES6(node.js) Promise 사용(콜백 대체)

// 실재 서버와 로컬 서버 주소 동시 지정(팁)
var MONGODB_URI = 'mongodb://<dbuser>:<dbpassword>@ds127842.mlab.com:27842/csslick_db';
mongoose.connect(MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};

// module.exports = {
// 	mongoose: mongoose
// }