const { hasUser, isOwner } = require("../middleware/guards");
const {
  getAll,
  create,
  getById,
  edit,
  deleteCreature,
} = require("../services/creatureService");


const router = require("express").Router();

router.get("/catalog", async (req, res) => {
  let creature = await getAll();

  res.render("creatures/catalog", { creature });
});

router.get("/create", hasUser(), (req, res) => {
  res.render("creatures/create");
});

router.post("/create", hasUser(), async (req, res) => {
  try {
    const creature = {
      name: req.body.name,
      species: req.body.species,
      skinColor: req.body.skinColor,
      eyeColor: req.body.eyeColor,
      image: req.body.image,
      description: req.body.description,
      votes: req.body.method,
      owner: req.user._id,
    };
    await create(creature);
    res.redirect("/creatures/catalog");

  } catch (error) {
    // console.log(error);
    return res.render("404", { error: error.message });
  }
});

router.get("/details/:id", async (req, res) => {
  let creature = await getById(req.params.id);

  if (!creature) {
    return res.redirect("/404", { error: "Creature not found!" });
  }

  if (!creature.votes) {
    creature.votes = [];
  }

  creature.isOwner = req.user && creature.owner == req.user._id ? true : false; // if the owner is the same as the logged in user
  // creature.votes =
  //   req.user &&
  //   creature.votes
  //     .map((c) => c.toString())
  //     .includes(req.user._id.toString())
  //     ? true
  //     : false;

  res.render("creatures/details", { creature });
});

router.get("/edit/:id", isOwner(), hasUser(), async (req, res) => {
  let creature = await getById(req.params.id);

  res.render("creatures/edit", { creature });
});

router.post("/edit/:id", isOwner(), hasUser(), async (req, res) => {
  const { name, species, skinColor, eyeColor, image, description, method } = req.body;
  await edit(req.params.id, { name, species, skinColor, eyeColor, image, description, method });

  res.redirect(`/creatures/details/${req.params.id}`);
});

router.get("/delete/:id", isOwner(), hasUser(), async (req, res) => {
  await deleteCreature(req.params.id);

  res.redirect("/creatures/catalog");
});

router.get("/vote/:id", hasUser(), async (req, res) => {
  const creature = await getById(req.params.id);

  try {
    if (creature.owner == req.user._id) {
      creature.isOwner = true;
      return res.render(`creatures/details`, {
        creature,
        error: "Cannot vote for your own creature",
      });
    }

    await vote(req.params.id, req.user._id);
    res.redirect(`/creatures/details/${req.params.id}`);
  } catch (error) {
    return res.render(`creatures/details`, { creature, error: error.message });
  }
});

module.exports = router;