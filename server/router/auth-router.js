const express = require("express");
const router = express.Router();
const { home, login, Register } = require("../controllers/auth-controller");

// Define the routes with their respective controllers
// router.get("/", home); // Handles /api/auth
// router.get("/login", login); // Handles /api/auth/login

router.route("/").get(home); // Handles /api/auth
router.route("/login").get(login); // Handles /api/auth/login
router.route("/register").post(Register);

module.exports = router;
