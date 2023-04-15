// const mongoose = require('mongoose').default;
// mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true, useUnifiedTopology: true})
//
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error: '));
// db.once('open', function(){
//     console.log('Connected')
// });
import mongoose from 'mongoose';
const { Schema } = mongoose;

const User = new Schema({
    email: String, // String is shorthand for {type: String}
    password: String,

});

const userLogin = mongoose.model('login',User);

module.exports = userLogin;