const User = require('../models/User');

const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { username: '', email: '', password:''};

    console.log('------------------------------------------------')

    // validation error checking
    if(err.message.includes('user validation failed')){
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message; 
        })
    }

    // duplicate error checking
    if(err.code === 11000){
        Object.keys(err.keyValue).forEach( (key) => {
            if(key === "username"){
                errors.username = 'username already exists'
            }

            if(key === "email"){
                errors.email = 'email already exists'
            }
        })
    }

    return errors;
}

module.exports.signup_post = async (req, res) => {
    const { username, email, password } = req.body;
    console.log(req.body)
    console.log("username: " + username);
    console.log("email: " + email);
    console.log("password: " + password);

    try {
        const user = await User.create({username, email, password});
        res.status(201).json(user);
    }
    catch(err){
        const errors = handleErrors(err);
        res.status(400).json({errors});
    }

   
}

module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;

    console.log("email: " + email);
    console.log("password: " + password);


    res.send('user login')
}