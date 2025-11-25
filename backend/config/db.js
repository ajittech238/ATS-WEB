

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri = "mongodb://127.0.0.1:27017/jobPortal";  // <-- Your DB name

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log("✔ MongoDB Connected to jobPortal");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
