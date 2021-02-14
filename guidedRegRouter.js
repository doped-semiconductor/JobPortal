const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser')
router.use( bodyParser.json() );       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
// const bcrypt = require("bcrypt");

var resMessage1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Message</title>
    <style>
        body{background-color: rgb(156, 116, 194);font-family: Arial; font-size: 2em;}
        div{
            position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
            background-color: white;color: rgb(156, 116, 194);padding: 2em;border-radius: 1em;}
    </style>
</head>
<body>
    <div id="msg">`

var resMessage2 = `</div>
</body>
</html>`

router.post('/newWorker',(req,res)=>{
    console.log(req.body)
    res.send("Received")
})

router.post('/addProfilePic',(req,res)=>{
    req.files.profilepic
})


router.get('/newUser',(req,res)=>{
  res.sendFile(__dirname + '/public-general/register.html')
})
router.post('/newUser',(req,res)=>{
  res.send(resMessage1+`Sucessfully Registered`+resMessage2)
})



module.exports = router