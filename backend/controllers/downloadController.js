const fs = require("fs");

module.exports.downloadGame = (req, res) => {
  fs.readFile("./Game/game_version.txt", (err, data) => {
    res.send(data);
  });
};

module.exports.downloadVersion = (req, res) => {
  fs.readFile("./Game/download_game.zip", (err, data) => {
    res.setHeader("content-type", "application/octet-stream");
    res.send(data);
  });
};
