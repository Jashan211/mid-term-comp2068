const mongoose = require('mongoose');

//define schema for the player model
//this and all other models inherit from mongoose.Schema

const playerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: 'Doh! You forgot to put in the first Name',
    },
    lastName: {
        type: String,
        required: 'Doh! You forgot to put in the last Name',
    },
    team: {
        type:String,
        required: 'Please enter team',
    },
    jersey: {
        type: Number,
    },
    url: {
        type: String,
        required: 'Please enter url',
    },
});

//make the class public
module.exports = mongoose.model('Player', playerSchema);