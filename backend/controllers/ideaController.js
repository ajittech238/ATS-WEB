// const Idea = require("../models/Idea");

// exports.createIdea = async (req, res) => {
//   try {
//     const {
//       projectName,
//       technologyName,
//       frontendLanguage,
//       backendLanguage,
//       database,
//       deployment,
//       name,
//       phone,
//       email,
//       description,
//     } = req.body;

//     // basic validation
//     if (
//       !projectName ||
//       !technologyName ||
//       !frontendLanguage ||
//       !backendLanguage ||
//       !database ||
//       !deployment ||
//       !name ||
//       !phone ||
//       !email ||
//       !description
//     ) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     // unique phone & email check
//     const existing = await Idea.findOne({
//       $or: [{ phone }, { email }],
//     });

//     if (existing) {
//       return res.status(400).json({
//         message:
//           "Phone or email already exists. Please use a different contact.",
//       });
//     }

//     await Idea.create({
//       projectName,
//       technologyName,
//       frontendLanguage,
//       backendLanguage,
//       database,
//       deployment,
//       name,
//       phone,
//       email,
//       description,
//     });

//     return res
//       .status(201)
//       .json({ message: "Your idea has been saved successfully." });
//   } catch (err) {
//     console.error("createIdea error:", err);

//     // handle duplicate key error from Mongo
//     if (err.code === 11000) {
//       return res.status(400).json({
//         message:
//           "Phone or email already exists (duplicate key). Please use a different one.",
//       });
//     }

//     return res
//       .status(500)
//       .json({ message: "Server error while saving idea", error: err.message });
//   }
// };



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

    // 🔹 Trim input values
    projectName = projectName?.trim();
    // frontendLanguage = frontendLanguage?.trim();
    // backendLanguage = backendLanguage?.trim();
    // database = database?.trim();
    // deployment = deployment?.trim();
    name = name?.trim();
    phone = phone?.trim();
    email = email?.trim()?.toLowerCase();
    description = description?.trim();

    // 🔥 Basic empty field validation
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

    // 🔥 Phone format (10 digits only)
    if (!/^[0-9]{10}$/.test(phone)) {
      return res.status(400).json({
        message: "Phone number must be 10 digits only",
      });
    }

    // 🔥 Email validation
    const emailRegex =
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Please enter a valid email address",
      });
    }

    // 🔥 Unique check: phone OR email existing
    const existing = await Idea.findOne({
      $or: [{ phone }, { email }],
    });

    if (existing) {
      return res.status(400).json({
        message:
          "Phone or Email already exists. Please use a different contact.",
      });
    }

    // 🔥 Save to database
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

    // MongoDB duplicate key error
    if (err.code === 11000) {
      return res.status(400).json({
        message:
          "Phone or Email already exists (duplicate key). Please use a different one.",
      });
    }

    // General error
    return res.status(500).json({
      message: "Server error while saving idea",
      error: err.message,
    });
  }
};
