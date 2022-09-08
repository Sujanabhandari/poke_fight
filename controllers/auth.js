
const User = require("../models/User");
const bcrypt = require("bcrypt");

const authenticate_self = async(req, res, next) => {
    try{
        const {username, password}= req.body;

    if(!username || !password ){
        return res.status(400).send("Missing Fields")
    }

    const foundUser = await User.findOne({username})
    if(!foundUser){
        return res.status(401).send("No user is registered");
    }
    const isPasswordSame = await bcrypt.compare(password, foundUser.password);

    if(!isPasswordSame){
        return res.status(401).send("Wrong credentials");
    }
    const token = foundUser.generateToken();
    res.set("token", token).status(200).send("Login was successfull");
    }
    catch(err){
        console.log(err);
        next()
    }
    

};

module.exports = { authenticate_self };