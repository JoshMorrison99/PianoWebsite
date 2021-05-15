const express = require('express');
const fs = require('fs');





const app = express();

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


const port =  5000;

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});