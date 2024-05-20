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



    const sendMail = (name,email,phone,details) => {
        console.log(name,email,phone,details)
        ejs.renderFile(__dirname + '/templates/contact.ejs', {name,email,phone,details}, (err, data) => {
          if (err) {
            console.log(err);
          } else {
            var mailOptions = {
              from: 'hj.jain05vit@gmail.com',
              to: "hj.jain05vit@gmail.com",
              subject: "Contact Form Submitted",
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

module.exports = sendMail;