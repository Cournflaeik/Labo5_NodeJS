//require express router
const express = require('express');
const router = express.Router();

//require the messages controller
const messagesController = require('../controllers/messages');

router.get("/",  messagesController.getAll);
router.post("/" , messagesController.create);

module.exports = router;