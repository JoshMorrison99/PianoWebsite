const User = require("../models/User");

module.exports.topten = async (req, res) => {
  try {
    const topUsers = await User.find({}).sort({ money: -1 }).limit(10).exec();
    res.status(200).json(topUsers);
  } catch (err) {
    console.log(err);
  }
};
