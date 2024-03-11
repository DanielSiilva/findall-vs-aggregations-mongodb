const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();

const app = express();

mongoose
  .connect(process.env.MONGOBD_URL)
  .then(() => {
    console.log("Connnecet to mongobd");
    app.listen(3002, () => {
      console.log("Server is runnig on port 3002");
    });
  })
  .catch((error) => {
    console.log("Connection failed", error);
  });
