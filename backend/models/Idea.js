const mongoose = require("mongoose");

const ideaSchema = new mongoose.Schema(
  {
    projectName: { type: String, required: true, trim: true },

    frontendLanguage: { type: String, required: true },

    backendLanguage: { type: String, required: true },

    database: { type: String, required: true },

    deployment: { type: String, required: true },

    name: { type: String, required: true, trim: true },

    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: [/^[0-9]{10}$/, "Phone number must be 10 digits"],
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email address",
      ],
    },

    description: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);
ideaSchema.index({ phone: 1 }, { unique: true });
ideaSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.model("Idea", ideaSchema);
