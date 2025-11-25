// // // // // const Application = require("../models/Application");

// // // // // exports.submitApplication = async (req, res) => {
// // // // //   try {
// // // // //     const { name, email, phone, experience, message, jobTitle } = req.body;

// // // // //     const resume = req.files.resume ? req.files.resume[0].path : null;
// // // // //     const image = req.files.image ? req.files.image[0].path : null;

// // // // //     const application = new Application({
// // // // //       name,
// // // // //       email,
// // // // //       phone,
// // // // //       experience,
// // // // //       message,
// // // // //       jobTitle,
// // // // //       resume,
// // // // //       image
// // // // //     });

// // // // //     await application.save();

// // // // //     res.json({ success: true, message: "Application Submitted Successfully!" });
// // // // //   } catch (err) {
// // // // //     res.status(500).json({ success: false, error: err.message });
// // // // //   }
// // // // // };


// // // // // exports.submitApplication = async (req, res) => {
// // // // //   try {
// // // // //     const application = new Application({
// // // // //       name: req.body.name,
// // // // //       email: req.body.email,
// // // // //       phone: req.body.phone,
// // // // //       experience: req.body.experience,
// // // // //       message: req.body.message,
// // // // //       jobTitle: req.body.jobTitle,
// // // // //       resume: req.files.resume?.[0]?.path || null,
// // // // //       image: req.files.image?.[0]?.path || null
// // // // //     });

// // // // //     await application.save();

// // // // //     // 🔥 Real-time event emit
// // // // //     io.emit("new-application", {
// // // // //       name: application.name,
// // // // //       job: application.jobTitle
// // // // //     });

// // // // //     res.json({ success: true, message: "Application Submitted!" });
// // // // //   } catch (error) {
// // // // //     res.status(500).json({ success: false, error: error.message });
// // // // //   }
// // // // // };


// // // // // backend/controllers/applicationController.js
// // // // const Application = require("../models/Application");

// // // // exports.submitApplication = async (req, res) => {
// // // //   try {
// // // //     // Debug logs — development में helpful हैं
// // // //     console.log("🔥 Received Data:", req.body);
// // // //     console.log("📂 Uploaded Files:", req.files);

// // // //     const application = new Application({
// // // //       name: req.body.name,
// // // //       email: req.body.email,
// // // //       phone: req.body.phone,
// // // //       experience: req.body.experience,
// // // //       message: req.body.message,
// // // //       jobTitle: req.body.jobTitle,
// // // //       resume: req.files?.resume?.[0]?.path || null,
// // // //       image: req.files?.image?.[0]?.path || null
// // // //     });

// // // //     await application.save();

// // // //     // Real-time socket emit using global.io to avoid circular import
// // // //     if (global.io && typeof global.io.emit === "function") {
// // // //       global.io.emit("new-application", {
// // // //         name: application.name,
// // // //         job: application.jobTitle
// // // //       });
// // // //     } else {
// // // //       console.warn("⚠️ global.io is not available to emit event.");
// // // //     }

// // // //     res.json({ success: true, message: "Application submitted!" });
// // // //   } catch (error) {
// // // //     console.error("❌ SUBMIT ERROR:", error);
// // // //     res.status(500).json({ success: false, error: error.message });
// // // //   }
// // // // };



// // // // const Application = require("../models/Application");

// // // // exports.submitApplication = async (req, res) => {
// // // //   try {
// // // //     const application = new Application({
// // // //       name: req.body.name,
// // // //       email: req.body.email,
// // // //       phone: req.body.phone,
// // // //       experience: req.body.experience,
// // // //       message: req.body.message,
// // // //       jobTitle: req.body.jobTitle,
// // // //       resume: req.files?.resume?.[0]?.path || null,
// // // //       image: req.files?.image?.[0]?.path || null
// // // //     });

// // // //     await application.save();

// // // //     // ⭐ Get full list + count
// // // //     const applications = await Application.find().sort({ appliedAt: -1 });
// // // //     const count = applications.length;

// // // //     // ⭐ Send to frontend notification system
// // // //     global.io.emit("new-application", {
// // // //       count,
// // // //       applications,
// // // //     });

// // // //     res.json({ success: true });
// // // //   } catch (error) {
// // // //     res.status(500).json({ success: false, error: error.message });
// // // //   }
// // // // };


// // // // controllers/applicationController.js
// // // const Application = require("../models/Application");

// // // exports.submitApplication = async (req, res) => {
// // //   try {
// // //     const application = new Application({
// // //       name: req.body.name,
// // //       email: req.body.email,
// // //       phone: req.body.phone,
// // //       experience: req.body.experience,
// // //       message: req.body.message,
// // //       jobTitle: req.body.jobTitle,
// // //       resume: req.files?.resume?.[0]?.path || null,
// // //       image: req.files?.image?.[0]?.path || null,
// // //       appliedAt: new Date(),
// // //     });

// // //     await application.save();

// // //     // ⭐ Proper formatted data for frontend (avoid Unknown issue)
// // //     const payload = {
// // //       name: application.name,
// // //       job: application.jobTitle,
// // //       phone: application.phone,
// // //       email: application.email,
// // //       time: new Date().toLocaleTimeString(),
// // //     };

// // //     // ⭐ Emit to all connected clients
// // //     global.io.emit("new-application", payload);

// // //     res.json({ success: true, message: "Application submitted successfully!" });
// // //   } catch (error) {
// // //     console.error("Application Error:", error);
// // //     res.status(500).json({ success: false, error: error.message });
// // //   }
// // // };


// // const Application = require("../models/Application");

// // exports.submitApplication = async (req, res) => {
// //   try {
// //     const application = new Application({
// //       name: req.body.name,
// //       email: req.body.email,
// //       phone: req.body.phone,
// //       experience: req.body.experience,
// //       message: req.body.message,
// //       jobTitle: req.body.jobTitle,
// //       resume: req.files?.resume?.[0]?.path || null,
// //       image: req.files?.image?.[0]?.path || null,
// //     });

// //     await application.save();

// //     // Latest application details
// //     const latestApplication = {
// //       name: application.name,
// //       job: application.jobTitle,
// //       email: application.email,
// //       phone: application.phone,
// //       resume: application.resume,
// //       image: application.image,
// //       time: application.appliedAt,
// //     };

// //     // Full list
// //     const applications = await Application.find().sort({ appliedAt: -1 });
// //     const count = applications.length;

// //     // Send real-time notification
// //     global.io.emit("new-application", {
// //       count,
// //       latest: latestApplication,
// //       applications,
// //     });

// //     res.json({ success: true });
// //   } catch (error) {
// //     res.status(500).json({ success: false, error: error.message });
// //   }
// // };


// // File: backend/controllers/applicationController.js
// // या: ./controllers/applicationController.js

// // const Application = require("../models/Application");

// // /**
// //  * submitApplication
// //  * Handles form-data (text fields + files via multer). Saves to MongoDB,
// //  * then emits a socket event with latest application and full list/count.
// //  */
// // exports.submitApplication = async (req, res) => {
// //   try {
// //     // Debug logs (अगर चाहें तो console.log हटा दें)
// //     console.log("🔥 submitApplication called");
// //     console.log("Body:", req.body);
// //     console.log("Files:", req.files);

// //     // Create document
// //     const application = new Application({
// //       name: req.body.name || "Unknown",
// //       email: req.body.email || null,
// //       phone: req.body.phone || null,
// //       experience: req.body.experience || null,
// //       message: req.body.message || null,
// //       jobTitle: req.body.jobTitle || null,
// //       // multer stores files in req.files when using upload.fields()
// //       // resume and image paths saved (या null)
// //       resume: req.files?.resume?.[0]?.path || null,
// //       image: req.files?.image?.[0]?.path || null
// //     });

// //     // Save to DB
// //     await application.save();

// //     // Prepare latest application summary to send to frontend
// //     const latestApplication = {
// //       id: application._id,
// //       name: application.name,
// //       job: application.jobTitle,
// //       email: application.email,
// //       phone: application.phone,
// //       resume: application.resume,
// //       image: application.image,
// //       time: application.appliedAt || new Date()
// //     };

// //     // Get full list (latest first) — optional, useful for admin panel sync
// //     // NOTE: if your DB is large, consider sending only count + latest instead of full list
// //     const applications = await Application.find().sort({ appliedAt: -1 }).limit(200); // limit for safety
// //     const count = await Application.countDocuments();

// //     // Emit via socket (server.js must have set global.io = io)
// //     try {
// //       if (global && global.io) {
// //         global.io.emit("new-application", {
// //           count,
// //           latest: latestApplication,
// //           applications // array (limited)
// //         });
// //         console.log("🔔 Emitted new-application event (count:", count, ")");
// //       } else {
// //         console.warn("⚠️ global.io is not defined — socket emit skipped");
// //       }
// //     } catch (emitErr) {
// //       console.error("Socket emit error:", emitErr);
// //     }

// //     // Respond to request
// //     return res.json({ success: true, message: "Application submitted", id: application._id });
// //   } catch (error) {
// //     console.error("❌ submitApplication error:", error);
// //     return res.status(500).json({ success: false, error: error.message });
// //   }
// // };


// // const Application = require("../models/Application");

// // exports.submitApplication = async (req, res) => {
// //   try {
// //     const application = new Application({
// //       name: req.body.name || "Unknown",
// //       email: req.body.email || null,
// //       phone: req.body.phone || null,
// //       experience: req.body.experience || null,
// //       message: req.body.message || null,
// //       jobTitle: req.body.jobTitle || null,
// //       resume: req.files?.resume?.[0]?.path || null,
// //       image: req.files?.image?.[0]?.path || null
// //     });

// //     await application.save();

// //     // LATEST APPLICATION (Navbar को यही चाहिए)
// //     const latestApplication = {
// //       name: application.name,
// //       job: application.jobTitle,
// //       email: application.email,
// //       phone: application.phone,
// //       time: application.appliedAt,
// //     };

// //     // COUNT FOR NOTIFICATION BADGE
// //     const count = await Application.countDocuments();

// //     // EMIT SOCKET EVENT
// //     global.io.emit("new-application", {
// //       latest: latestApplication,   // Navbar uses this
// //       count: count                 // Badge number
// //     });

// //     res.json({
// //       success: true,
// //       message: "Application submitted",
// //       id: application._id
// //     });

// //   } catch (error) {
// //     console.error("Application Error:", error);
// //     res.status(500).json({
// //       success: false,
// //       error: error.message
// //     });
// //   }
// // };


// // controllers/ApplicationController.js
// const Application = require("../models/Application");

// exports.submitApplication = async (req, res) => {
//   try {
//     console.log("🔥 API HIT: /submitApplication");

//     const application = new Application({
//       name: req.body.name || "Unknown",
//       email: req.body.email || null,
//       phone: req.body.phone || null,
//       experience: req.body.experience || null,
//       message: req.body.message || null,
//       jobTitle: req.body.jobTitle || "Unknown Role",
//       resume: req.files?.resume?.[0]?.path || null,
//       image: req.files?.image?.[0]?.path || null,
//     });

//     await application.save();

//     // ⭐ LATEST APPLICATION OBJECT (Navbar यही पढ़ता है)
//     const latest = {
//       name: application.name,
//       job: application.jobTitle,
//       phone: application.phone,
//       email: application.email,
//       time: application.appliedAt,
//     };

//     // ⭐ COUNT FOR NAVBAR BADGE
//     const count = await Application.countDocuments();

//     // ⭐ EMIT SOCKET EVENT
//     console.log("📢 Emitting socket event -> new-application");
//     console.log("DATA SENDING:", latest);

//     global.io.emit("new-application", {
//       latest,
//       count,
//     });

//     res.json({
//       success: true,
//       message: "Application submitted successfully",
//     });

//   } catch (err) {
//     console.error("❌ Application Error:", err);
//     res.status(500).json({ success: false, error: err.message });
//   }
// };


// backend/controllers/ApplicationController.js
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
      count
    });

    res.json({ success: true });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
};



