const express = require("express");
const router = express.Router();

const { createIdea } = require("../controllers/ideaController");
router.post("/idea-bank", createIdea);

module.exports = router;
