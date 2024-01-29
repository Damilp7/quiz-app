const {QuizModel} = require('../models/QuizModel');

// GET ROUTES

// GET HOMEPAGE 
const getHomePage = async (req, res) => {
  try {
    res.status(200).render("index", {title: "Home"});
  } catch (error) {
    console.log(error)
  }
};

// GET ABOUT PAGE
const getAboutPage = async (req, res) => {
  try {
    res.status(200).render("about", {title: "About us"})
  } catch (error) {
    console.log(error)
  }
};

// GET TEST QUIZ PAGE
const getTestQuiz = async (req, res) => {
  try {
    res.status(200).render("quiz", {title: "Take Quiz"})
  } catch (error) {
    console.log(error)
  }
};

// GET CREATE QUIZ PAGE
const getCreateQuiz = async (req, res) => {
  try {
    res.status(200).render("createQuiz", {title: "Create Your Quiz"})
  } catch (error) {
    console.log(error)
  }
};

// GET VIEW QUIZ PAGE TO TAKE QUIZ
const getViewQuiz = async (req, res) => {
  try {
    res.status(200).render('viewQuiz')
  } catch (error) {
    console.log(error);
  }
};


// GET REQUEST TO START QUIZ
const getStartQuiz = async (req, res) => {
  try {
    const quizzes = await QuizModel.find();
    res.status(201).json({success: true, message: "data fetched successfully", quizzes}); 
  } catch (error){
    console.log(error.message);
  }
};



// POST A QUIZ 

const postQuiz = async (req, res) => {
  const { question, answer, option1, option2, option3 } = req.body;
    const newQuiz = new QuizModel({
        question,
        options: [answer, option1, option2, option3]
    });
  try {
    await newQuiz.save();
    console.log("new document has been saved!");
    res.status(201).render("decision", { success: true, message: "Document saved successfully"}).redirect("/");
  } catch (error) {
    console.log(error);
    res.status(500).render("decision", {success: false, message: "Error saving file!"});
  }
};


// ERROR ROUTING

const errorController = async (req, res) => {
  try {
     res.status(404).render("error", {title: "page not found"});
  } catch (error) {
    console.log(error)
    res.status(500).json({success: false, message: "error fetching data"});
  }
};


module.exports = {
  getHomePage,
  getAboutPage,
  getTestQuiz,
  getCreateQuiz,
  getViewQuiz,
  getStartQuiz,
  postQuiz,
  errorController
};