var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var transporter = nodemailer.createTransport({
    sendmail:true,
});







const mailOptions = {
    from: 'GeorgePBurdell@gatech.edu', // sender address
    to: 'info@fraudmarc.com', // list of receivers
    subject: 'Hiring bonus for Jeff Kang Bin Kim', // Subject line
    html: '<p>This is not a spam. I am serious.</p>'// plain text body
};

transporter.sendMail(mailOptions, function (err, info) {
    if(err)
        console.log(err);
    else
        console.log(info);
});

module.exports = router;
