const express = require("express");
const router = require("./router/auth-router");
const app = express();

const PORT = 5000;

// Middleware for the auth routes
app.use("/api/auth", router);


// Route to the homepage
app.get("/", (req, res) => {
    res.status(200).send("Welcome by server.js");
});

// Route to the registration page
app.get("/register", (req, res) => {
    res.status(200).send("Do your registration on this page.");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
