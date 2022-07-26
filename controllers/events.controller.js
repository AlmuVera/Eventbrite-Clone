const mongoose = require("mongoose");
const Event = require("../models/event.model");

module.exports.list = (req, res, next) => {
  Event.find()
    // .populate("author")
    .then((events) => {
      res.render("events/list", { events });
    })
    .catch((error) => next(error));
};


