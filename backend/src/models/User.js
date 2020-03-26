const {Schema, model} = require('mongoose');


var schema = new Schema({
    email: String, 
    password: String
},{
    timestamps:true
});

var User = model('User', schema);

module.exports = User;