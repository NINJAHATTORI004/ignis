/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");

// const connectDB = require("./data/database");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
//connection mongodb
const connectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://akshat200414:4mqxQiyKIZHrtFeP@cluster0.zk5mm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        dbName: "talk-to-us",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then((c) => console.log(`db connected with ${c.connection.host}`))
    .catch((e) => console.log(e));
};
connectDB();
app.use(morgan("dev"));
app.use(bodyParser.json());
// mongoose.connect("mongodb://localhost:27017/talk-to-us", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
const notesSchema = new mongoose.Schema(
  {
    fullName: String,
    phoneNumber: String,
    workEmail: String,
    brandWebsite: String,
    campaignBudget: String,
    campaignStartDate: String,
    howDidYouHear: String,
    campaignObjective: String,
  },
  { collection: "responses" }
);

const Note = mongoose.model("Note", notesSchema);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/TalkToUs.jsx");
});

app.get("/", (req, res) => {
  res.send("Backend Server Runnnig");
});

app.post("/talkExpertForm", function (req, res) {
  console.log(res.body);
  let newNote = new Note({
    fullName: req.body.fullName,
    phoneNumber: req.body.phoneNumber,
    workEmail: req.body.workEmail,
    brandWebsite: req.body.brandWebsite,
    campaignBudget: req.body.campaignBudget,
    campaignStartDate: req.body.campaignStartDate,
    howDidYouHear: req.body.howDidYouHear,
    campaignObjective: req.body.campaignObjective,
  });
  newNote
    .save()
    .then(() => res.redirect("/"))
    .catch((err) => res.status(500).send(err));
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "0221csds100@gmail.com", // Replace with your email
    pass: "oktd oaqg kkae qoey", // Replace with your email password
  },
});
const publicUserSchema = new mongoose.Schema({
  UserEmail: {
    type: String,
    unique: [true, "Email already Exist"],
    // required: [true, "Please enter email"],
  },
});
const publicUser = mongoose.model("newsletter-emailss", publicUserSchema);
app.post("/subscribe", async (req, res, next) => {
  const { email } = req.body;
  console.log("user email", email);
  try {
    await transporter.sendMail({
      from: '"IgnisMentis" <0221csds100@gmail.com>',
      to: email,
      subject: "Subscription Confirmation ",
      text: "Welcome to IgnisMentis, Thank you for subscribing, We're honoured to have you on board.",
      html: "<b>Welcome to IgnisMentis, Thank you for subscribing, We're honoured to have you on board.</b>",
    });
    let user = await publicUser.findOne({
      UserEmail: email,
    });
    if (user) {
      return next(new ErrorHandler("Email already exist", 409));
    }
    user = await publicUser.create({
      UserEmail: email,
    });
    res.status(200).json({
      message: "Subscription Successful",
      data: {
        user,
      },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error processing subscription" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));