const express = require('express');
const {connectDb} = require('./database/db'); 
const quizRoutes = require('./routes/quizRoutes');
// const ResultModel = require('./models/resultModel');
const app = express();
const port = 4000;


// MIDDLEWARE
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(quizRoutes);
// CRUD - Create-post request | Read-get request | Update-put/patch request | Delete
// status codes - 200(ok), 201(create), 400(bad request), 401(unauthorized), 402(payment needed), 404(page not found), 500(server side error)



(async function(){ 
  await connectDb();
  app.listen(port, () => console.log(`server running on port : ${port}`))

})()
 


 