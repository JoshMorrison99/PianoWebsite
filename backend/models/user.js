const mongoose = require('mongoose')
const { isEmail } = require('validator')
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please enter a username'],
        minlength: [4, 'Minimum username length is 4 characters'],
        unique: true
    },
    email: {
        type:String, 
        required: [true, 'Please enter an email'],
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Minimum password length is 6 characters']
    },
    money: {
        type: Number,
        default: 0
    },
    level: {
        type: Number,
        default: 1
    },
    exp: {
        type: Number,
        default: 0
    },
    purchased: {
        type: Boolean,
        default: false
    }
});

userSchema.pre('save', async function (next) {
    console.log('user about to be created and saved', this);
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next()
})

// method to login user
userSchema.statics.login = async function(username, password){
    const user = await this.findOne({username});
    if(user){
        const auth = await bcrypt.compare(password, user.password);
        if(auth){
            return user;
        }
        throw Error('incorrect password')
    }
    throw Error('incorrect username')
}

// method to return user
userSchema.statics.get_user = async function(_id){
    const user = await this.findOne({_id});
    if(user){
        return user
    }
    throw Error('incorrect id')
}

// method to update user
userSchema.statics.put_user = async function(_id, update){
    mongoose.set('useFindAndModify', false); // Deprecation warning
    const user = await this.findOneAndUpdate(_id, update);
    if(user){
        return user
    }
    throw Error('incorrect id')
}

const User = mongoose.model('user', userSchema)

module.exports = User;