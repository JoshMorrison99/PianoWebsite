const User = require("../models/User");
const Song = require("../models/Song");

const handleErrors = (err) => {
  // incorrect id
  if (err.message === "incorrect id") {
    errors.username = "that id is not registered";
  }
};

module.exports.user_get = async (req, res) => {
  console.log(req.query);
  try {
    const user = await User.get_user(req.query.id);
    res.status(200).json({
      username: user.username,
      _id: user._id,
      money: user.money,
      level: user.level,
      exp: user.exp,
    });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.user_put = async (req, res) => {
  console.log(req.body);
  const update = req.body;
  try {
    const user = await User.findByIdAndUpdate(req.body.id, update, {
      useFindAndModify: true,
    });
    res.status(200).json({
      username: user.username,
      _id: user.id,
      money: user.money,
      level: user.level,
      exp: user.exp,
    });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.songs_put = async (req, res) => {
  const { Songs } = req.body;
  console.log(req.query.user);
  try {
    const user = await User.findById(req.query.user);
    Songs.forEach((song) => {
      const newSong = new Song(song);
      user.songs.push(newSong);
    });
    user.save();
    res.status(200).json({
      user,
    });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.song_put = async (req, res) => {
  const { songID } = req.body;
  const update = req.body;
  console.log(req.query.user);
  console.log(req.body);
  try {
    const user = await User.findById(req.query.user);
    const song = await user.songs.findOneAndUpdate(songID, update);
    user.save();
    res.status(200).json({
      user,
    });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};
