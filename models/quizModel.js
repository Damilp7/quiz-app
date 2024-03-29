const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  question: {
      required: true,
      type: String,
      unique: true
  },
  options: {
      required: true,
      type: Array
  }
}, {timestamps: true});

const QuizModel = mongoose.model("quiz", quizSchema);
module.exports = {QuizModel};
