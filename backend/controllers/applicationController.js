const Application = require("../models/Application");

exports.submitApplication = async (req, res) => {
  try {
    const application = new Application({
      name: req.body.name || "Unknown",
      email: req.body.email || null,
      phone: req.body.phone || null,
      jobTitle: req.body.jobTitle || null,
      experience: req.body.experience || null,
      message: req.body.message || null,
      resume: req.files?.resume?.[0]?.path || null,
      image: req.files?.image?.[0]?.path || null,
    });

    await application.save();

    const latest = {
      name: application.name,
      job: application.jobTitle,
      email: application.email,
      phone: application.phone,
      time: application.appliedAt,
    };

    const count = await Application.countDocuments();

    global.io.emit("new-application", {
      latest,
      count,
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
};
