const express = require('express');
const router = express.Router();

const events = require('../controllers/events.controller.js')
router.get('/', events.list);   


module.exports = router;