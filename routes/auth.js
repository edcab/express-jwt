const express = require("express");
const router = express.Router();

const {
  signup,
  signin,
  signout,
  showuser,
  requireSignin,
} = require("../controller/auth");

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signout", signout);
router.get("/letmeshow/user", requireSignin, showuser);

module.exports = router;
