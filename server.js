require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const email = process.env.EMAIL_ADDRESS;
const password = process.env.EMAIL_PASSWORD;

console.log("Email:", email);
console.log("Password:", password);

const app = express();
const port = 3001;

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use cors middleware
app.use(cors());

// configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: password,
  },
});

// POST route for handling form submission
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Email message configuration
  const submittedValues = {
    from: "recipient-email@example.com",
    to: email,
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // send the email
  transporter.sendMail(submittedValues, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email: " + error.message);
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

// start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
