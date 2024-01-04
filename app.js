const express = require('express');
const quizModel = require('./models/quizModel');
const {connectDb} = require('./database/db'); 
const app = express();
const port = 4000;


// MIDDLEWARE
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

// CRUD - Create-post request | Read-get request | Update-put/patch request | Delete
// status codes - 200(ok), 201(create), 400(bad request), 401(unauthorized), 402(payment needed), 404(page not found), 500(server side error)

// CREATE/POST REQUEST START

app.post('/make-quiz', (req, res) => {
  try {
    
  } catch (error) {
    console.log(error)
  }
})

// POST REQUEST END

// GET
app.get('/', (req, res) => {
  try {
    res.status(200).render("index", {title: "Home"});
  } catch (error) {
    console.log(error)
  }
});

app.get('/about', (req, res) => {
  try {
    res.status(200).render("about", {title: "About us"})
  } catch (error) {
    console.log(error)
  }
})

app.get('/quiz', (req, res) => {
  try {
    res.status(200).render("quiz", {title: "Take Quiz"})
  } catch (error) {
    console.log(error)
  }
})

app.get('/custom-quiz', (req, res) => {
  try {
    res.status(200).render("viewQuiz", {title: "Your Quiz"})
  } catch (error) {
    console.log(error)
  }
})
 
app.get("*", (req, res) => {
  try {
     res.status(404).render("error", {title: "page not found"});
  } catch (error) {
    console.log(error)
  }
});
// GET REQUEST END




(async function(){ 
  await connectDb();
  app.listen(port, () => console.log(`server running on port : ${port}`))

})()
 

