const nodeMailer = require('nodemailer');

let transporter = nodeMailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure:true,
    port: 465,
    auth: {
    user: "hj.jain05@gmail.com",
    pass: "vbtr eqpj gehy qvqv",
         }
    });

    let mailOptions = {
 
        from: "hj.jain05vit@gmail.com" , // sender address
        to: "hj.jain05vit@gmail.com", // list of receiver
        subject: 'Greeting mail from HJ', // Subject line
        html: '<div>Hi, Welcome to the mail box <img src="https://sureshjewellersjaipur.in/img/ring/sj5.jpg" /> check this new image</div>', // plain text body
      
    };

const sendMail = (data) => {
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Emailsss sent: ' + info.response);
        }
      });
}

module.exports = sendMail;