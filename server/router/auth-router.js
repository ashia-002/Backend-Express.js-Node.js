const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send("Welcome by router");
});

router.route("/login").get((req, res) => {
    res.status(200).send("You can login from this page");
})

module.exports = router;