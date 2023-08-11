const Creature = require("../models/Creature");

function getAll() {
    return Creature.find({}).lean();
}

function getById(id) {
    return Creature.findById(id).lean();
}

async function create(creatureData) {
    return await Creature.create(creatureData);
}

async function edit(id, creature) {
    const existingCreature = await Creature.findByIdAndUpdate(id, creature);

    existingCreature.name = creature.name;
    existingCreature.species = creature.species;
    existingCreature.skinColor = creature.skinColor;
    existingCreature.eyeColor = creature.eyeColor;
    existingCreature.image = creature.image;
    existingCreature.description = creature.description;
    existingCreature.method = creature.method;

    await existingCreature.save();
}

async function deleteCreature(id) {
    await Creature.findByIdAndDelete(id);
}

async function vote(creatureId, userId) {
    const creature = await Creature.findById(creatureId);
  
    creature.votes.push(userId);
    creature.save();
  }

module.exports = {
    getAll,
    getById,
    create,
    edit,
    deleteCreature,
    vote
};