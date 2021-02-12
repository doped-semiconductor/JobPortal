var nodemailer = require('nodemailer');

class SupportMail{
    /**
     * To send notifications to users and stakeholders via email
     * It can be extended to SMS medium in the future
     */
    constructor(){
        this.authOptions = {
            service: 'gmail',
            auth: {
                user: 'lg6351148@gmail.com',
                pass: 'password'
            }
        }
    }

    sendMail(recepients,subject,text){
        var mailOptions = {
            from: 'lg6351148@gmail.com',
            to: recepients,
            subject: subject,
            text: text
        };
        var transporter = nodemailer.createTransport(this.authOptions);
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {console.log(error);} 
            else {console.log('Email sent: ' + info.response);}
        });
    }

    logger(content,message){}
}

// var s = new SupportMail()
// s.sendMail('ss8180@srmist.edu.in','Support','Tesing node js')