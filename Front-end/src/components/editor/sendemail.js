 const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
 const textLength = 6;
 function generateRandomText() {
   let result = "";
  for (let i = 0; i < textLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
function generateRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 900000) + 100000;
  let timestamp = new Date().getTime();
  let uniqueNumber = timestamp.toString() + randomNumber.toString();
  return parseInt(uniqueNumber.substr(0, 6));
}

const OTP=generateRandomText();
const payment=generateRandomNumber();
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
 service: "outlook",
   auth: {
     user: "remedyapp28444857@outlook.com",
     pass: "jsxreact@Jsxreact",
   },
 });
 let mailOptions = {
   from:"remedyapp28444857@outlook.com",
   to: "20z248@psgtech.ac.in",
   subject: "Customer OTP mail",
   text: `After receiving payment from customer say this OTP to customer for confirm their payment ${OTP} and Payment Id ${payment}`,
 };
 function sendmail(){
   const confirm="OTP Successfully sent"
   transporter.sendMail(mailOptions, function (error, info) {
     if (error) {
       return error
     } else {
       return confirm
     }
   });
 }

sendmail();


