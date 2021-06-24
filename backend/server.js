const express = require('express');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const passport = require('passport')
require('./config/passport')
require('dotenv').config()


const port = process.env.PORT
const app = express();
app.use(passport.initialize())
app.use(passport.session())

let db = mongoose.connection;
//mongoose.connect('mongodb://mongo:27017/prime-pianist', { useNewUrlParser: true, useUnifiedTopology: true, } );   //PRODUCTION
mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true, useUnifiedTopology: true, } ); //DEVELOPMENT

// Check for error
db.on('error', err => {
    console.log("MONGO Database error occurred")
});

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const sessionStore = new MongoStore({
    mongooseConnection: db,
    collection: 'sessions'
});

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 // 1 Year
    }
}))

app.get('/api/game_version', (req, res) => {
    fs.readFile('./Game/game_version.txt', (err, data) => {
        res.send(data)
    })
})

app.get('/api/game_download', (req, res) => {
    fs.readFile('./Game/download_game.zip', (err, data) => {
        res.setHeader('content-type', 'application/octet-stream');
        res.send(data)
    })
})

// Server Listen on port
app.listen(5000);
console.log("Server Started...");