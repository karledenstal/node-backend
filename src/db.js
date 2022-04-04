const mongoose = require("mongoose");

const connect = () => {
  try {
    mongoose.connect(
      "mongodb://ec2-3-249-202-253.eu-west-1.compute.amazonaws.com:27017/",
      {
        auth: { authSource: process.env.DB_AUTH_SOURCE },
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: process.env.DB_NAME,
      }
    );

    console.log("db connected");
  } catch (e) {
    console.error("conn error", e);
  }
};

module.exports = connect;
