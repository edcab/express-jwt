const User = require("../models/user");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

exports.signup = (req, res) => {
  console.log("Request to save: ", req.body);
  const user = new User(req.body);
  console.log("User to save: ", user);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        error: "We have an Error please verify," + err,
      });
    }
    user.salt = undefined;
    user.hashed_password = undefined;
    res.json({
      user,
    });
  });
};

exports.signin = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User with that email does not exist. Please signup",
      });
    }
    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "Email and password dont match",
      });
    }
    const token = jwt.sign({ _id: user._id }, "mySecretKey");

    res.cookie("t", token, { expire: new Date() + 9999 });
    const { _id, name, email, role } = user;
    return res.json({ token, user: { _id, email, name, role } });
  });
};

exports.requireSignin = expressJwt({
  secret: "mySecretKey",
  userProperty: "auth",
});

exports.showuser = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User with that email does not exist. Please signup",
      });
    }
    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "Email and password dont match",
      });
    }
    const { _id, name, email, role } = user;
    return res.json({ user: { _id, email, name, role } });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("t");
  res.json({ message: "Signout success" });
};
