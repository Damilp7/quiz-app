
const mongoose = require('mongoose');

async function connectDb() {
  try{
    const res = await mongoose.connect('mongodb://localhost:27017/quizApp')
    console.log("connected to db successfully")
  }
  catch(err) {
    console.log(err.message)
  }
};

module.exports = {connectDb};