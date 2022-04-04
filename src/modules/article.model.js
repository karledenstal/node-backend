const mongoose = require("mongoose");

const Article = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Article", Article);
