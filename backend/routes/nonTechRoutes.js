const express = require("express");
const upload = require("../storage"); // ← your global multer storage
const {
  createNonTechApplication,
} = require("../controllers/nonTechController");

const router = express.Router();

const nonTechUpload = upload.fields([
  { name: "resume", maxCount: 1 },
  { name: "image", maxCount: 1 },
]);

router.post("/nontech-apply", nonTechUpload, createNonTechApplication);

module.exports = router;
