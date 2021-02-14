const express = require("express");
const router = express.Router();
// const bcrypt = require("bcrypt");

introQuestions = {
    "en":{
        "q0":"Do you want to register yourself?",
        "q1":"What is your name?",
        "q2":"What is your age?",
        "q3":"Where do you live?",
        "q4":"Do you have an aadhaar card? If yes, fill your aadhaar number",
        "q5":"Please upload a selfie by clicking on the camera icon"
    },
    "hi":{
        "q0":"क्या आप पंजीकरण कराना चाहते हैं?",
        "q1":"आपका नाम क्या है?",
        "q2":"आपकी उम्र क्या है?",
        "q3":"आप किस शहर या गाँव में रहते हैं?",
        "q4":"क्या आपके पास आधार कार्ड है? यदि हाँ, तो अपना आधार नंबर भरें",
        "q5":"कृपया नीचे दिया हुआ कैमरा बटन पर क्लिक करके एक सेल्फी अपलोड करें"
    }
}

router.get('/login/:lang',(req,res)=>{
    res.sendFile(__dirname+"/public/intro.html")
})

module.exports = router