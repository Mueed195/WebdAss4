if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()


}


const MongoClient = require("mongodb").MongoClient;


const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true})

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function(){
    console.log('Connected')
});


const express = require('express')
const app = express()
const path = require('path');
const passport = require('passport');
const flash = require('express-flash')
const session = require('express-session')
const expressLayouts = require('express-ejs-layouts')
const initializePassport = require('./passport-config')
initializePassport (passport, email => users.find(user => user.email === email))

const users = [];

// Static Files.
app.use(express.static ('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/fonts', express.static(__dirname + 'node_modules/bootstrap'))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
// Set Views
app.use(expressLayouts);
app.set('view engine', 'ejs')



app.get('', (req, res) => {
    res.render("index")
})

app.get('/products', (req, res) => {
    res.render("products")
})
app.get('/services', (req, res) => {
    res.render("services")
})

app.get('/about', (req, res) => {
    res.render("about")
})


app.get('/contact', (req, res) => {
    res.render("contact")
})

app.get('/login', (req, res) => {
    res.render("login")
})


app.post('/login', passport.authenticate("local",{
    successRedirect: '/about',
    failureRedirect: '/login',
    failureFlash: true
}))






app.listen(3000)