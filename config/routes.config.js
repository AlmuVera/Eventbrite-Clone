const express = require('express');
const router = express.Router();

const events = require('../controllers/events.controller.js')

router.get('/', events.list);
router.get("/new", events.new);
// router.get('/new', events.new);



module.exports = router;