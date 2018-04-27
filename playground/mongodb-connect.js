//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongoDb server');
    }
    console.log("Connected to MongoDB");
    var db = client.db('TodoApp');
//    db.collection('Todos').insertOne({
//        text: 'Something to do',
//        completed: false
//    }, (err, result) => {
//        if (err) {
//            return console.log('Unable to insert todo', err);
//        }
//        
//        console.log(JSON.stringify(result.ops, undefined, 2));
//    });
//    db.collection('Users').insertOne({
//        name: 'Tushar',
//        age: 20
//    }, (err, result) => {
//        if (err) {
//            console.log("Unable to insert into users");
//        }
//        
//        console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
//    });
    
    client.close();
});