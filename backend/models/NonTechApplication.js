const mongoose = require("mongoose");

const nonTechApplicationSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email",
      ],
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: [/^[0-9]{10}$/, "Phone must be 10 digits"],
    },
    category: { type: String, required: true },
    experience: { type: String },
    message: { type: String, required: true },
    resumePath: { type: String, required: true },
    imagePath: { type: String },
  },
  { timestamps: true }
);

nonTechApplicationSchema.index({ email: 1 }, { unique: true });
nonTechApplicationSchema.index({ phone: 1 }, { unique: true });

module.exports = mongoose.model(
  "NonTechApplication",
  nonTechApplicationSchema
);
