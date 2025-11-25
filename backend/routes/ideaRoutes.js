// const express = require("express");
// const router = express.Router();
// const { createIdea } = require("../controllers/ideaController");

// router.post("/idea-bank", createIdea);

// module.exports = router;


const express = require("express");
const router = express.Router();

const { createIdea } = require("../controllers/ideaController");

// POST: Save new idea
router.post("/idea-bank", createIdea);

module.exports = router;
