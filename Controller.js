const { response, text } = require("express");
const user = require("./Model");
const nodemailer = require("nodemailer");

let sender = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "gokulsusela@gmail.com",
    pass: "pgww euah mfxr zand",
  },
});

const postFun = (req, res) => {
  const { name, email, members, date } = req.body;
  user
    .create({ name: name, email: email, members: members, date: date })
    .then((re) => {
      let composemail = {
        from: "gokulsusela@gmail.com",
        to: re.email,
        subject: "Account confirmation",
        html: `
        <h1 style="font-size: 20px; font-weight: bold; color: green">Hi ${re.name},</h1>
  <p style="font-size: 16px; line-height: 1.5">This email confirms your table booking for <span style="font-weight: bold">${re.members}</span> people on <span style="font-style: italic">${re.date}</span>.</p>
  <p style="font-size: 16px; line-height: 1.5">We look forward to seeing you then!</p>
  <p style="font-size: 14px; text-align: right">Sincerely,</p>
  <p style="font-size: 14px; text-align: right">Nia Restaurant</p>
</body>`,
      };
      sender.sendMail(composemail, (err, info) => {
        if (err) {
          res.status(400).json(err);
        } else {
          res.status(200).json(info);
        }
      });
    })
    .catch((err) => console.error(err));
};

module.exports = { postFun };
