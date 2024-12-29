const mongoose = require("mongoose");

const URI = "mongodb://127.0.0.1:27017/jobTracker_admin"



const connectDb = async() =>{
    try {
        await mongoose.connect(URI);
    } catch (error) {
        console.error("database connection failed.");
        process.exit(0);
    }
}

module.exports = connectDb;