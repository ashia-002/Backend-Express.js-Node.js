const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
});

//?securing password
userSchema.pre('save', async function(){
    // console.log("pre method: ", this);
    const user = this;

    //if password is not modified
    if(!user.isModified("password")){
        next();
    }

    try {
       //hash the password
        const salt = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, salt);
        user.password = hash_password; 
    } catch (error) {
        next(error);
    }
})

//defining the modelor collection name
const User = new mongoose.model("User", userSchema);
module.exports = User;