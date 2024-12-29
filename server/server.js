const express = require("express");
const app = express();

const PORT = 5000

app.get("/", () => {
    res.status(200).send("Welcome");
});

app.get("/register", () => {
    res.status(200).send("Do your registraion in this page.");
});

app.listen(PORT, (req, res) => {
    console.log('server is running.')
})


