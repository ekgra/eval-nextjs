const express = require("express");
const InterestController = require("../controllers/interestController");

const router = express.Router();

// POST: Create new interest
router.post("/", InterestController.createInterest);

// GET: List all interests
router.get("/", InterestController.getAllInterests);

module.exports = router;
