const { getById } = require("../services/creatureService");

function hasUser() {
    return (req, res, next) => {
        if (req.user) {
            next();
        } else {
            res.redirect("/404");
        }
    };
}

function isOwner() {
    return async (req, res, next) => {
        const creature = await getById(req.params.id);
        if (req.user && creature.owner == req.user._id) {
            res.locals.isOwner = true;
            next();
        } else {
            res.redirect("/404");
        }
    };
}

module.exports = {
    hasUser,
    isOwner,
};