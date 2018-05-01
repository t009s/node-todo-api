var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};

//'mongodb://t009s:tusharma09@ds145790.mlab.com:45790/todos-collection' ||