const express = require('express')
const app = express()
const port = 3001

app.post('/signup', (req, res) => {
  //add logic to decode body
  ///body should have email and password
  //store email and password in the users array above only with if it doeesnt exciat
  //return back 200 status code 
})

app.post('/login', (req, res) => {
   //add logic to decode body
  ///body should have email and password
  //check if the users given email exists and check password
  //if password is same return 200 status code
  //also send back a token(random stering)
  //IF NOT SAME return 401 status code

  })

app.get('/quesitons' , (req,res) => {
  //return the user all the questions
    res.send('Hello world!!');
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