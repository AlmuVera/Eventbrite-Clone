const mongoose = require("mongoose");
const Event = require("../models/event.model");

module.exports.list = (req, res, next) => {
  Event.find()
    // .populate("author")
    .then((events) => {
      res.render("events/list", { events });
      console.log(events)
    })
    .catch((error) => next(error));
};

module.exports.detail = (req, res, next) => {
    Event.findById(req.params.id)
        .then((event) => res.render("events/detail", { event }))
        .catch((error) => next(error))
};

module.exports.new = (req, res, next) => {
    res.render("events/new");
};

module.exports.create = (req, res, next) => {
    const event = req.body;
    // return res.json(req.body)

    Event.create(event)
        .then((event) => res.redirect("/"))
        .catch((error) => next(error));
};

module.exports.delete = (req, res, next) => {
    
    Event.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/"))
    .catch((error) => next(error));
};
