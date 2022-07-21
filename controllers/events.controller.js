const Event = require("../models/event.model.js")

module.exports.list = (req, res, next) => {
    res.render('events/list', { events });
};

//ejemplo de
// module.exports.list = (req, res, next) => {
//     Event.find(req.query).then((events) => {
//       res.render("events/list", { events });
//     });
//   };