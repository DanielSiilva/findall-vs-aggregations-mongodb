const mongoose = require("mongoose");
const Hero = require("../hero");

const heroesData = [
  { name: "Iron Man", power: "Genius, billionaire, playboy, philanthropist" },
  { name: "Captain America", power: "Super soldier serum" },
  { name: "Thor", power: "God of Thunder" },
  { name: "Hulk", power: "Superhuman strength" },
  { name: "Black Widow", power: "Master spy and martial artist" },
  { name: "Hawkeye", power: "Master archer" },
  { name: "Black Panther", power: "Enhanced strength and agility" },
  { name: "Spider-Man", power: "Spider-like abilities" },
  { name: "Doctor Strange", power: "Mastery of the mystic arts" },
  { name: "Captain Marvel", power: "Cosmic powers" },
  { name: "Scarlet Witch", power: "Chaos magic and reality warping" },
  { name: "Vision", power: "Density control and solar energy projection" },
  {
    name: "Ant-Man",
    power: "Size manipulation and communication with insects",
  },
  { name: "Wasp", power: "Size manipulation and bio-electric energy blasts" },
  { name: "Falcon", power: "Flight and military combat skills" },
  { name: "Winter Soldier", power: "Enhanced strength and armament" },
  { name: "War Machine", power: "Advanced armor and weaponry" },
  { name: "Quicksilver", power: "Superhuman speed" },
  { name: "Loki", power: "Illusion casting and trickery" },
  {
    name: "Groot",
    power: "Regenerative healing factor and control over plants",
  },
  { name: "Rocket Raccoon", power: "Expert marksman and tactician" },
  { name: "Star-Lord", power: "Expert pilot and combatant with elemental gun" },
  {
    name: "Gamora",
    power: "Superhuman strength and agility, skilled assassin",
  },
  { name: "Drax the Destroyer", power: "Superhuman strength and resilience" },
  { name: "Mantis", power: "Empathy and sleep induction" },
  { name: "Nebula", power: "Cybernetic enhancements and combat skills" },
  { name: "Shang-Chi", power: "Master martial artist and weapon proficiency" },
  {
    name: "The Eternals",
    power:
      "Various powers including matter manipulation, energy projection, and immortality",
  },
  {
    name: "Moon Knight",
    power:
      "Increased strength, endurance, and prophetic visions under the moon",
  },
  { name: "Blade", power: "Vampire hunter with superhuman abilities" },
];

module.exports.seedHeroes = function () {
  Hero.insertMany(heroesData)
    .then((result) => {
      console.log("Heroes successfuly inserted:", result);
      mongoose.connection.close();
    })
    .catch((error) => {
      console.error("Error on seeding:", error);
    });
};
