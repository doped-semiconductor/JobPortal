const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser')
router.use( bodyParser.json() );       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

const mongo = require('./mongoService')
var mongoOp = new mongo.mongoDriver()

router.get('/',(req,res)=>{
    var type = req.query.type    
    res.type('.html')
    res.sendFile(__dirname +'/public-general/login.html')
})

router.post('/',async (req,res)=>{
    // console.log("Post login received")
    // console.log(req.body)
    await mongoOp.recruiterLogin(req.body,(x)=>{
        if(x){res.render('generalDashboard',{'uname':req.body['uname']})}
    }) 
    res.render('notif',{'message':'Login Failed!'}) 
    
})

module.exports = router