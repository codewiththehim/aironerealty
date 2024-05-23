const nodeMailer = require('nodemailer');
const ejs = require('ejs');

let transport = nodeMailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure:true,
    port: 465,
    auth: {
    user: "hj.jain05@gmail.com",
    pass: "vbtr eqpj gehy qvqv",
         }
    });



    const sendPasswordMail = (email,password) => {
        console.log("forgot mailer")
        ejs.renderFile(__dirname + '/templates/forgotPassword.ejs', {email,password}, (err, data) => {
          if (err) {
            console.log(err);
          } else {
            var mailOptions = {
              from: 'hj.jain05vit@gmail.com',
              to: email,
              subject: "Please find your credentials",
              html: data
            };
      
            transport.sendMail(mailOptions, (error, info) => {
              if (error) {
                return console.log(error);
              }
              console.log('Message sent: %s', info.response);
            });
          }
        });
      };

module.exports = sendPasswordMail;