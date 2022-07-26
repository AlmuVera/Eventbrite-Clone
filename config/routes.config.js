const express = require('express');
const router = express.Router();

const events = require('../controllers/events.controller.js')

router.get('/', events.list); //render event list with filters
router.get('/:id', events.detail) //render event detail
router.get("/new", events.new); //render event form
router.post('/', events.create); //create event and redirect to list
router.get('/:id/delete', events.delete) //render event detail


module.exports = router;

//update Carlos dijo que de momento no
