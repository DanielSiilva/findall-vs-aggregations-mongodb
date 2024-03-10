const mongoose = require("mongoose");

const heroSchema = mongoose.Schema(
  {
    name: String,
    power: String,
  },
  { bufferCommands: false }
);

const Hero = mongoose.model("Hero", heroSchema);

module.exports = Hero;
