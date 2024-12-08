const Interest = require("../models/Interest");

class InterestDAO {
  static async createInterest(data) {
    const newInterest = new Interest(data);
    return await newInterest.save();
  }

  static async getAllInterests() {
    return await Interest.find({});
  }
}

module.exports = InterestDAO;
