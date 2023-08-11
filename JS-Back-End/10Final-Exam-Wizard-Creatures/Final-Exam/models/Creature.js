const { Schema, model, Types } = require("mongoose");

const creatureSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: [2, "Name must be at least 2 characters long!"],
  },
  species: {
    type: String,
    required: true,
    minLength: [3, "Species must be at least 3 characters long!"],
  },
  skinColor: {
    type: String,
    required: true,
    minLength: [3, "Skin color must be at least 3 characters long!"],
  },
  eyeColor: {
    type: String,
    required: true,
    minLength: [3, "Eye color must be at least 3 characters long!"],
  },
  image: {
    type: String,
    required: true,
    match: [/^https?/, "Image must be a valid URL!"],
  },
  description: {
    type: String,
    required: true,
    minLength: [5, "Description must be at least 5 characters long!"],
    maxLength: [500, "Description must be not longer than 500 characters!"],
  },
  votes: { type: [Types.ObjectId], ref: "User", def: [] },
  owner: { type: Types.ObjectId, ref: "User" },
});

const Creature = model("Creature", creatureSchema);
module.exports = Creature;