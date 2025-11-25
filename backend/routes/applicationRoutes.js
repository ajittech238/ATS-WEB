// const express = require("express");
// const router = express.Router();
// const upload = require("../storage");
// const { submitApplication } = require("../controllers/applicationController");


// router.post(
//   "/apply",
//   upload.fields([
//     { name: "resume", maxCount: 1 },
//     { name: "image", maxCount: 1 }
//   ]),
//   submitApplication
// );

// module.exports = router;


// backend/routes/applicationRoutes.js
const express = require("express");
const router = express.Router();
const upload = require("../storage");
const { submitApplication } = require("../controllers/applicationController");

/**
 * Expecting multipart/form-data with fields:
 * - resume (file)
 * - image (file)
 * - name, email, phone, experience, message, jobTitle (text fields)
 */
router.post(
  "/apply",
  upload.fields([
    { name: "resume", maxCount: 1 },
    { name: "image", maxCount: 1 }
  ]),
  submitApplication
);

module.exports = router;
