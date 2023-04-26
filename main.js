
const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const port = 3000
var users= [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//reads emails and password from users.json and parses it into users array
const fs= require('fs');
fs.readFile('users.json' , 'utf8',(err,data) => {
if(err) {
  console.error(err);
  return;
}
 users = JSON.parse(data);
console.log(users);
});

app.get('/signup', (req, res) => {
  
  res.send(`<html> 
  <body>
  <h1>Sign up Form</h1>
  <form method="post" action="/signup/next">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <br>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
    <br>
    <button type="submit">Login</button>
  </form>
  </body>
  </html>`);
  //add logic to decode body
  ///body should have email and password
  
  
  
});

app.post('/signup/next' , (req , res) => {
  const email= req.body.email;
  const password = req.body.password;

 

  //checks if user already exists IN THE ARRAY
const existingUser =users.find(user => user.email === email);
if(existingUser) {
  return res.status(409).send('User already exists');
}
else{
  //store email and password in the users array above only with if it doeesnt exciat
  users.push({email , password});

  //return back 200 status code 
  res.status(200);
  res.redirect('/login');
}


 
});

app.get('/login' , (req , res) => {
  res.send(`<html> 
  <body>
  <h1>lOGIN FORM</h1>
  <form method="post" action="/login/validate">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <br>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
    <br>
    <button type="submit">Login</button>
  </form>
  </body>
  </html>`);
  
});

app.post('/login/validate', (req, res) => {
   //add logic to decode body
   console.log('Validate section');
   const email = req.body.email;
   const password = req.body.password;
  console.log(email);
  console.log(password);
  ///body should have email and password
  //check if the users given email exists and check password
  const existingUser =users.find(user=>user.email ===email);
 
  
  if(existingUser){
    res.status(200).send('Random token:yhosaefgbSDFGD123dfsguy1w09898576gc jvmnxm,yname isndwuig.f. XAT&Io42');
    
  }
  else{
    res.status(401).send('Login failed');
  }
  //if password is same return 200 status code
  //also send back a token(random stering)
  //IF NOT SAME return 401 status code

  })

app.get('/questions' , (req,res) => {
  //return the user all the questions
    res.send('questions');
});

app.get('/submissions', (req, res) => {

  //return the users submissions for this problem
    res.send('Hello world ');
});

app.post('/submissions', (req, res) => {

  //let the user sublmit a problem , randomly accept or reject he solution
  //store the solution in the submission array
    res.send('Hello world ');
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})