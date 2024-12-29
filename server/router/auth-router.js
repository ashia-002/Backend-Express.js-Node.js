const express = require("express");
const router = express.Router();
const { home, login } = require("../controllers/auth-controller");

// Define the routes with their respective controllers
router.get("/", home); // Handles /api/auth
router.get("/login", login); // Handles /api/auth/login

module.exports = router;
