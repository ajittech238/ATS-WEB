const Idea = require("../models/Idea");

exports.createIdea = async (req, res) => {
  try {
    let {
      projectName,
      frontendLanguage,
      backendLanguage,
      database,
      deployment,
      name,
      phone,
      email,
      description,
    } = req.body;
    projectName = projectName?.trim();
    name = name?.trim();
    phone = phone?.trim();
    email = email?.trim()?.toLowerCase();
    description = description?.trim();
    if (
      !projectName ||
      !frontendLanguage ||
      !backendLanguage ||
      !database ||
      !deployment ||
      !name ||
      !phone ||
      !email ||
      !description
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (!/^[0-9]{10}$/.test(phone)) {
      return res.status(400).json({
        message: "Phone number must be 10 digits only",
      });
    }
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Please enter a valid email address",
      });
    }
    const existing = await Idea.findOne({
      $or: [{ phone }, { email }],
    });

    if (existing) {
      return res.status(400).json({
        message:
          "Phone or Email already exists. Please use a different contact.",
      });
    }
    await Idea.create({
      projectName,
      frontendLanguage,
      backendLanguage,
      database,
      deployment,
      name,
      phone,
      email,
      description,
    });

    return res.status(201).json({
      message: "Your idea has been saved successfully.",
    });
  } catch (err) {
    console.error("❌ createIdea error:", err);
    if (err.code === 11000) {
      return res.status(400).json({
        message:
          "Phone or Email already exists (duplicate key). Please use a different one.",
      });
    }
    return res.status(500).json({
      message: "Server error while saving idea",
      error: err.message,
    });
  }
};
