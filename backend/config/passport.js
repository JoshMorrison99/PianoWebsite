const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')


const verifyCallback = (username, password, done) => {
    let user = User.login(username, password)
    if(!user){
        return done(null, false)
    }else{
        return done(null, user)
    }
}
const strategy = new LocalStrategy(verifyCallback);

passport.use(strategy)