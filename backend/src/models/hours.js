const {Schema, model} = require('mongoose');


var schema = new Schema({
    EmploymentId: Number,
    Names: String,
    startDate: String,
    endDate: String,
    startTurn: Number,
    endTurn:Number,
    startTime: Number,
    endTime: Number,
    reason: String

},{
    timestamps:true
});

var hours = model('User', schema);

module.exports = hours;