const User = require('../models/User');

const handleErrors = (err) => {
     // incorrect id
    if(err.message === 'incorrect id'){
        errors.username = 'that id is not registered'
    }
}

module.exports.user_get = async (req, res) => {
    console.log(req.query);
    try{
        const user = await User.get_user(req.query.id);
        res.status(200).json({ username: user.username, _id: user._id, money: user.money, level: user.level, exp: user.exp, purchased: user.purchased })
    }  
    catch(err){
        const errors = handleErrors(err);
        res.status(400).json({errors});
    }
}

module.exports.user_put = async (req, res) => {
    console.log(req.query);
    const update = req.body;
    try{
        const user = await User.put_user(req.query.id, update);
        res.status(200).json({ username: user.username, _id: user._id, money: user.money, level: user.level, exp: user.exp, purchased: user.purchased })
    }  
    catch(err){
        const errors = handleErrors(err);
        res.status(400).json({errors});
    }
}