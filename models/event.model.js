const mongoose = require('mongoose');
const Event = mongoose.model(
    'Event',
    {
        image: String,
        title: String,
        date: String,
        location: String,
        city: String,
        price: Number,
        organizer: String,
        description: String,
        ticketStatus: String, //sold out or available   
    },
 );
 
 module.exports = Event;






















//>>>>>>>>
//>>>>>>>>
//>>>>>>>>



 // const Schema = mongoose.Schema;

// const eventSchema = new Schema({
//   title: {
//     type: String,
//     required: "Title is required",
//     minLength: [10, "Title needs at least 10 chars"],
//   },
//   author: {
//     type: Schema.Types.ObjectId,
//     required: true,
//     ref: "User",
//   },
//   description: {
//     type: String,
//     minLength: [10, "Description needs at least 10 chars"],
//   },
//   image: {
//     type: String,
//     default: "https://loremflickr.com/320/240/brazil",
//     validate: {
//       validator: function (image) {
//         try {
//           new URL(image);
//           return true;
//         } catch (error) {
//           return false;
//         }
//       },
//       message: (image) => `Invalid URL`,
//     },
//   },
// });

// const Event = mongoose.model("Event", eventSchema);

// module.exports = Event