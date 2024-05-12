const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')
const passport = require('passport')
const express = require('express');
const session = require('express-session');
require('dotenv').config();

// databse connection
const url = 'mongodb://localhost/pizza';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.on('error', (err) => {
    console.error('Database connection error:', err);
});

connection.once('open', () => {
    console.log('Database connected....');
});

const app = express();
const ejs = require('ejs');
const path = require("path");
const expressLayout = require("express-ejs-layouts");
const PORT = process.env.PORT || 3000;
const flash = require('express-flash');

// Create a new session store instance using MongoStore
const mongoStore = MongoStore.create({
    mongoUrl: url, // your MongoDB URL
    dbName: 'pizza', // name of your database
    collectionName: 'sessions' // collection where sessions will be stored
});


// express-session middleware 
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: mongoStore,
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // session  for 24hrs
}));

// Passport config
const passportInit = require('./app/config/passport')
passportInit(passport)
app.use(passport.initialize());
app.use(passport.session());
  
app.use(flash());

// Assets 
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false}))
app.use(express.json())

// Global middleware
app.use((req, res, next) => {
    res.locals.session = req.session
    res.locals.user = req.user
    next()
})

// set Template engine
app.use(expressLayout);
app.set('views', path.join(__dirname, "/resources/views"));
app.set("view engine", "ejs");

require('./routes/web')(app);

app.listen(PORT , () => {
    console.log(`Listening on port ${PORT}`);
});