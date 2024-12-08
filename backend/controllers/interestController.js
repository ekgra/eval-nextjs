const InterestService = require("../services/interestService");

class InterestController {
  static async createInterest(req, res) {
    try {
      const { name, city, interest, profilePhoto } = req.body;

      if (!name || !city || !interest || !profilePhoto) {
        return res.status(400).json({ error: "All fields are required" });
      }

      const newInterest = await InterestService.addInterest({
        name,
        city,
        interest,
        profilePhoto,
      });

      res.status(201).json({ message: "Interest added successfully", data: newInterest });
    } catch (error) {
      res.status(500).json({ error: "Failed to add interest", details: error.message });
    }
  }

  static async getAllInterests(req, res) {
    try {
      const interests = await InterestService.listInterests();
      res.status(200).json({ data: interests });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch interests", details: error.message });
    }
  }
}

module.exports = InterestController;
