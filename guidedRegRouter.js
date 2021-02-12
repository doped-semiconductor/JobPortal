const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser')
router.use( bodyParser.json() );       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
// const bcrypt = require("bcrypt");

router.post('/newWorker',(req,res)=>{
    console.log(req.body)
    res.send("Received")
})

module.exports = router