const InterestDAO = require("../dao/interestDAO");

class InterestService {
  static async addInterest(data) {
    // Additional business logic can be added here
    return await InterestDAO.createInterest(data);
  }

  static async listInterests() {
    // Additional business logic can be added here
    return await InterestDAO.getAllInterests();
  }
}

module.exports = InterestService;
