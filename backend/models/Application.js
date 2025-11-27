const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  experience: { type: String },
  message: { type: String },
  resume: { type: String }, // file path
  image: { type: String }, // file path
  jobTitle: { type: String },
  appliedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Application", applicationSchema);
