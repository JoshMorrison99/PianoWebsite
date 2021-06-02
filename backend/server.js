const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const port = process.env.PORT || 5000


// Server Listen on port
app.listen(5000);
console.log("Server Started...");