const express = require("express");
const router = express.Router();
const upload = require("../storage");
const { submitApplication } = require("../controllers/applicationController");

router.post(
  "/apply",
  upload.fields([
    { name: "resume", maxCount: 1 },
    { name: "image", maxCount: 1 },
  ]),
  submitApplication
);

module.exports = router;
