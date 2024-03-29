const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.post("/new", function (req, res, next) {
  console.log(req.body);
  messages.push({text:req.body.messageText, user:req.body.authorName, added: new Date()})
  res.redirect("/");
});

router.get("/new", function (req, res, next) {
  res.render("form");
});



module.exports = router;
