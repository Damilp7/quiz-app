const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  question:{
    type: String,
    required: true
  },
  option1:{
    type: String,
    required: true
  },
  option2:{
    type: String,
    required: true
  },
  option3:{
    type: String,
    required: true
  },
  option4:{
    type: String,
    required: true
  },
})

const quizModel = mongoose.model('quiz', quizSchema);

module.exports = quizModel; 