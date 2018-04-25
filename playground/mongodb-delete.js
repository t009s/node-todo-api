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

    //deleteMany
//    db.collection('Todos').deleteMany({text: 'lunch'}).then((result) => {
//        console.log(result);
//    });
    //deleteOne
//    db.collection('Todos').deleteOne({text: 'lunch'}).then((result) => {
//        console.log(result);
//    });
    //findOneAndDelete
//    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//        console.log(result);
//    });
//    db.collection('Users').deleteMany({name: 'Tushar'}).then((result) => {
//        console.log(result);
//    });
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5ae07feeec96652398854834')
    }).then((result) => {
        console.log(result);
    });

    client.close();
});
