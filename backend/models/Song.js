const mongoose = require("mongoose");

const SongSchema = new mongoose.Schema({
  songID: {
    type: Number,
  },
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  highscore: {
    type: Number,
  },
  plays: {
    type: Number,
  },
  stars: {
    type: String,
  },
  totalNotes: {
    type: Number,
  },
  notesHit: {
    type: Number,
  },
  percentage: {
    type: Number,
  },
  difficulty: {
    type: String,
  },
});

const Song = mongoose.model("Song", SongSchema);

module.exports = Song;
