const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: "remedyapp28444857@outlook.com",
    pass: "jsxreact@Jsxreact",
  },
});
const Customername="Senthuran";
const Customeremail="20z248@psgtech.ac.in";
const CustomerAddress="chennai";
const ProblemDetails="hello";
let mailOptions = {
  from:"remedyapp28444857@outlook.com",
  to: "20z248@psgtech.ac.in",
  subject: "Customer OTP mail",
  text: `Customer Details: ${Customername},${Customeremail},${CustomerAddress},${ProblemDetails}`,
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
const n=sendmail();