const router = require('express').Router();
const {
  getHomePage,
  getAboutPage,
  getTestQuiz,
  getCreateQuiz,
  getViewQuiz,
  getStartQuiz,
  postQuiz,
  errorController
} = require("../controllers/quizController");



// CREATE/POST REQUEST START

router.post('/post-quiz', postQuiz);

// POST REQUEST END

// GET or READ ROUTES START
router.get('/', getHomePage);

router.get('/about', getAboutPage);

router.get('/quiz', getTestQuiz);

router.get('/create-quiz', getCreateQuiz);

router.get('/view-quiz', getViewQuiz);

router.get('/start-quiz', getStartQuiz);
 
router.get("*", errorController);
// GET REQUEST ROUTES END 


module.exports = router;