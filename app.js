const authRoutes = require("./routes/auth");
const mongoose = require("mongoose");

var express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

var app = express();

// db
mongoose
  .connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB Connected"));

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use("/api", authRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
