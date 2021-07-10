const mongoose = require("mongoose");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const handleErrors = (err) => {
  console.log(err.errors);
  const myError = [];

  if (err.code === 11000) {
    if (Object.keys(err.keyValue)[0] === "username") {
      const usernameError = {
        message: "Username already exists",
        path: "username",
      };
      myError.push(usernameError);
    }

    if (Object.keys(err.keyValue)[0] === "email") {
      const emailError = { message: "Email alreadt exists", path: "email" };
      myError.push(emailError);
    }
  } else {
    Object.values(err.errors).forEach((error) => {
      myError.push(error.properties);
    });
  }
  return myError;
};

module.exports.signup_post = async (req, res) => {
  console.log("yeet ", req.session);
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  const { username, email, password, money, level, exp } = req.body;

  const salt = await bcrypt.genSalt();
  const passwordHashed = await bcrypt.hash(password, salt);

  try {
    console.log("---------------=-=---");
    const user = await User.create({
      username,
      email,
      password: passwordHashed,
      money,
      level,
      exp,
    });
    console.log("here");

    req.session.userID = user._id;
    console.log(req.session.id);
    res.status(201).json(user);
  } catch (err) {
    console.log("---> ", err);
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;
  console.log("email: " + email);
  console.log("password: " + password);

  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw Error("incorrect email");
    }
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      req.session.userID = user._id;
      res.status(200).json({ user });
    } else {
      throw Error("incorrect password");
    }
  } catch (err) {
    console.log(err);
    res.status(400);
  }
};

module.exports.logout = (req, res) => {
  console.log("session: ", req.session);
  req.session.destroy();
  res.end();
};

module.exports.me = async (req, res) => {
  console.log("session -> ", req.session.userID);
  if (!req.session.userID) {
    res.status(400).send(null);
    return null;
  }

  try {
    const user = await User.findById(req.session.userID);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
};
