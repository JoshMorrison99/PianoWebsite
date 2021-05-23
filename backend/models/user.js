const mongoose = require('mongoose')
const { isEmail } = require('validator')


const User = new mongoose.Schema({
    email: {
        type:String, 
        required: [true, 'Please enter an email']
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Pleasee enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password']
        minlength: [6, 'Minimum password length is 6 characters']
    }

})

module.exports = mongoose.model('User', User)