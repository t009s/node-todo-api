const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

//var id = '5ae71f0a33af7a20d07f0b941';
//
//if (!ObjectID.isValid(id)) {
//    console.log('Id not valid');
//}

//Todo.find({
//    _id: id
//}).then((todos) => {
//    console.log('Todos', todos);
//});
//
//Todo.findOne({
//    _id: id
//}).then((todo) => {
//    console.log('Todo', todo);
//});

//Todo.findById(id).then((todo) => {
//    if (!todo) {
//        return console.log('Id not found');
//    }
//    console.log('Todo by Id', todo);
//}).catch((e) => console.log(e));

const {User} = require('./../server/models/user');

var id = '5ae25f415692d62494f40976';

User.findById(id).then((user) => {
    if (!user) {
        return console.log('User not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});