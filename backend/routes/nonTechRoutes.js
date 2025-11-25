// const express = require("express");
// const multer = require("multer");
// const path = require("path");
// const { createNonTechApplication } = require("../controllers/nonTechController");

// const router = express.Router();

// // storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads");
//   },
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname);
//     cb(null, Date.now() + "-" + file.fieldname + ext);
//   },
// });

// const upload = multer({
//   storage,
//   limits: { fileSize: 5 * 1024 * 1024 },
// });

// // resume + image fields
// const nonTechUpload = upload.fields([
//   { name: "resume", maxCount: 1 },
//   { name: "image", maxCount: 1 },
// ]);

// router.post("/nontech-apply", nonTechUpload, createNonTechApplication);

// module.exports = router;


const express = require("express");
const upload = require("../storage");  // ← your global multer storage
const { createNonTechApplication } = require("../controllers/nonTechController");

const router = express.Router();

const nonTechUpload = upload.fields([
  { name: "resume", maxCount: 1 },
  { name: "image", maxCount: 1 }
]);

router.post("/nontech-apply", nonTechUpload, createNonTechApplication);

module.exports = router;
