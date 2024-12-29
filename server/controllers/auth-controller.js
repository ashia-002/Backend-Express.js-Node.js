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
        console.log(req.body);
        res.status(200).json({message: req.body});
    } catch (error) {
        console.error("Error in login controller:", error);
        res.status(500).send("An error occurred");
    }
};

module.exports = { home, login, Register };
