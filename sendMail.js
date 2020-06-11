require('dotenv/config');
var nodemailer = require('nodemailer');

function sendEmail(temp) {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    });

    var mailOptions = {
        from: 'pedro.silva47200@gmail.com',
        to: 'pedro.silva4720@gmail.com',
        subject: 'alo',
        text: `temp: ${temp.temp}`
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}


module.exports = sendEmail;
