const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

// Controller for the home route
const home = async (req, res) => {
    try {
        res.status(200).send("Welcome by router");
    } catch (error) {
        console.error("Error in home controller:", error);
        res.status(500).send("An error occurred");
    }
};

// Controller for the login route
const login = async (req, res) => {
    try {
        const { email, password} = req.body;

        const userExist = await User.findOne({email});

        if(!userExist){
            return res.status(400).json({message: "Invalid credentials"});
        }

        const user = await bcrypt.compare(password, userExist.password);

        if(user){
            res.status(200).json({
                msg: "Login successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        }else{
            res.status(401).json({message: "Invalid email and password."})
        }

        res.status(200).send("You can login from this page");
    } catch (error) {
        console.error("Error in login controller:", error);
        res.status(500).send("An error occurred");
    }
};

// Controller for the login route
const Register = async (req, res) => {
    try {
        // res.status(200).json({message: "Now lets begin your registration."});
        //console.log(req.body);
        const {username, email, phone, password} = req.body;

        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({msg: "email already exists."})
        }

        // //hash the password
        // const salt = 10;
        // const hash_password = await bcrypt.hash(password, salt);


        const userCreated = await User.create({username, email, phone, password});

        res.status(201).json({
            msg: "Registration sucessfull.", 
            token: await userCreated.generateToken(), 
            userId: userCreated._id.toString()
        });

    } catch (error) {
        console.error("Error in login controller:", error);
        res.status(500).send("An error occurred");
    }
};

module.exports = { home, login, Register };
