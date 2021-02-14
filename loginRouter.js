const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser')
router.use( bodyParser.json() );       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

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

router.get('/',(req,res)=>{
    var type = req.query.type    
    res.type('.html')
    res.sendFile(__dirname +'/public-general/login.html')
})

router.post('/',(req,res)=>{
    console.log("Post login received")
    console.log(req.body)
    if (req.body['uname']=='getsreya@gmail.com'){
        res.redirect('/dashboard')
    }
    res.send('logged in')
})

module.exports = router