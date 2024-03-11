const Hero = require("../hero");

async function runFindAll(hero) {
  return Hero.find({}).exec();
}

module.exports = { runFindAll };
