const express = require("express");
const router = express.Router();
const controller = require("../controllers/index.js");

router.get('/open-ai', controller.getOpenAIResponse);

module.exports = router;
