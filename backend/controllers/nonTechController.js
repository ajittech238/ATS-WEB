const NonTechApplication = require("../models/NonTechApplication");

exports.createNonTechApplication = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      category,
      experience,
      message,
    } = req.body;

    // basic required check
    if (!fullName || !email || !phone || !category || !message) {
      return res.status(400).json({ success: false, message: "All required fields must be filled." });
    }

    // unique email / phone check
    const existing = await NonTechApplication.findOne({
      $or: [{ email }, { phone }],
    });

    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Phone or Email already exists. Please use a different contact.",
      });
    }

    // file paths (multer ने set किया होगा)
    const resumePath = req.files?.resume?.[0]?.path;
    const imagePath = req.files?.image?.[0]?.path;

    if (!resumePath) {
      return res.status(400).json({
        success: false,
        message: "Resume file is required.",
      });
    }

    await NonTechApplication.create({
      fullName,
      email,
      phone,
      category,
      experience,
      message,
      resumePath,
      imagePath,
    });

    return res.status(201).json({
      success: true,
      message: "Your application has been submitted successfully.",
    });
  } catch (err) {
    console.error("NonTech apply error:", err);

    if (err.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Phone or Email already exists (duplicate key).",
      });
      
    }

    return res.status(500).json({
      success: false,
      message: "Server error while submitting application.",
    });
  }
};
