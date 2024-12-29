const express = require("express");
const router = require("./router/auth-router"); // Import the auth-router
const app = express();

const PORT = 5000;

// Middleware for the auth routes
app.use("/api/auth", router);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
