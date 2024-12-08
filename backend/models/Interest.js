const mongoose = require("mongoose");

const InterestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  interest: { type: String, required: true },
  profilePhoto: { type: String, required: true }, // URL or metadata
}, { timestamps: true });

module.exports = mongoose.model("Interest", InterestSchema);
