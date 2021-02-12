const express = require("express");
const router = express.Router();
// const bcrypt = require("bcrypt");

router.get('/',(req,res)=>{
    var type = req.query.type    
    res.type('.html')
    res.sendFile(__dirname +'/public-general/login.html')
})

router.post('/',(req,res)=>{
    console.log("Post login received")
    console.log(req.body)
    res.send('logged in')
})

module.exports = router