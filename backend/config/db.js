const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.TGT_CONNSTR, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
