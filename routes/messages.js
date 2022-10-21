//require express router
const express = require('express');
const router = express.Router();

//require the toppings controller
const messagesController = require('../controllers/toppings');

router.get("/",  messagesController.getAll);
router.post("/" , messagesController.create);

module.exports = router;