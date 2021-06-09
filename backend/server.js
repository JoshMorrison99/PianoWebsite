const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const port = process.env.PORT || 5000

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