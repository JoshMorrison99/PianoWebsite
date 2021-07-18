const mongoose = require("mongoose");
const { Song } = require("../models/Song").schema;
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter a username"],
    minlength: [4, "Minimum username length is 4 characters"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [6, "Minimum password length is 6 characters"],
  },
  money: {
    type: Number,
    default: 0,
  },
  level: {
    type: Number,
    default: 1,
  },
  exp: {
    type: Number,
    default: 0,
  },
  expToNextLevel: {
    type: Number,
    default: 0,
  },
  songs: {
    type: [Song],
    default: [],
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;

// test
