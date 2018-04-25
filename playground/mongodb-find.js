//const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongoDb server');
    }
    console.log("Connected to MongoDB");
    var db = client.db('TodoApp');

//    db.collection('Todos').find({
//        _id: new ObjectID('5ae082d9cbcb5ac5754731b4')
//    }).toArray().then((docs) => {
//        console.log('Todos');
//        console.log(JSON.stringify(docs, undefined, 2));
//    }, (err) => {
//        console.log('Unable to fetch', err);
//    });

//    db.collection('Todos').find().count().then((count) => {
//        console.log(`Todos Count: ${count}`);
//    }, (err) => {
//        console.log('Unable to fetch', err);
//    });
    db.collection('Users').find({name: 'Tushar'}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch', err);
    });
    //client.close();
});
