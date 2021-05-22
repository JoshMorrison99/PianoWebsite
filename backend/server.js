const express = require('express');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

const port = process.env.PORT || 5000

// Connect to Mongo
let db = mongoose.connection;
mongoose.connect('mongodb://mongo:27017/prime-pianist', { useNewUrlParser: true, useUnifiedTopology: true, } );

// Check for error
db.on('error', err => {
    console.log("MONGO Database error occurred")
});

// Connect to database
db.once('open', () => {
    // Connect to MongoDB
    console.log("Mongoose Running...");

    // Server Listen on port
    app.listen(5000);
    console.log("Server Started...");

});

// Game Version Get Request
app.get('/api/version_game', (req, res) => {
    fs.readFile('./game/version_game.txt', (err, data) => {
        if (err) throw err;
        res.send(data);
    });
});

// Game Download Get Request
app.get('/api/download_game', (req, res) => {
    fs.readFile('./game/download_game.zip', (err, data) => {
        if (err) throw err;
        res.setHeader('content-type', 'application/octet-stream');
        res.send(data);
    });
});


// Launcher Version Get Request
app.get('/api/version_launcher', (req, res) => {
    fs.readFile('./launcher/version_launcher.txt', (err, data) => {
        if (err) throw err;
        res.send(data);
    });
});

// Launcher Download Get Request
app.get('/api/download_launcher', (req, res) => {
    fs.readFile('./launcher/download_launcher.zip', (err, data) => {
        if (err) throw err;
        res.setHeader('content-type', 'application/octet-stream');
        res.send(data);
    });
});