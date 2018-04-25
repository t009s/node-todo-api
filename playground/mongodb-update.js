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

    //findOneAndUpdate
//    db.collection('Todos').findOneAndUpdate({
//        _id: new ObjectID("5ae0abf549167b6b55a944ea")
//    }, {
//        $set: {
//            completed: true
//        }
//    }, {
//        returnOriginal: false
//    }).then((result) => {
//        console.log(result);
//    });
    db.collection('Users').findOneAndUpdate({name: 'T'}, {
        $set: {
            name: 'Tushar'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    
    //client.close();
});
