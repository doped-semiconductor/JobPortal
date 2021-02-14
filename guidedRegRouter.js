const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser')
const mongo = require('./mongoService')
router.use( bodyParser.json() );       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

const mongoOp = new mongo.mongoDriver()

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

router.post('/newUser',async (req,res)=>{
  await mongoOp.checkUserEmailExist({'uname':req.body['uname']},(it)=>{
    if (it){
      res.render('notif',{'message':'User already exists!'})
  }})
  await mongoOp.addRecruiter(req.body)
  res.render('notif',{'message':'Sucessfully Registered!'})
})

module.exports = router