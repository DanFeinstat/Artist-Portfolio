const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 3002;

//allow cross origin access
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Headers", "Content-type,Authorization");
  next();
});

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Contact Route
app.post("/api/message", function(req, res) {
  let newMessage = req.body;

  console.log(newMessage);

  let mailOptions = {
    from: "artportfoliomailsender@gmail.com",
    to: "danfeinstatpokemon@gmail.com",
    subject: "Art Portfolio New Message from " + newMessage.email,
    text: newMessage.message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) return console.log(error);

    console.log("Email sent: " + info.response);
  });
});

let transporter = nodemailer.createTransport({
  // example with google mail service
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "artportfolioemailsender@gmail.com", // replace by your email to practice
    pass: "artportdemo", // replace by your-password
  },
});

app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});
