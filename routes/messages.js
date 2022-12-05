//require express router
const express = require('express');
const router = express.Router();

//require the messages controller
const messagesController = require('../controllers/messages');

router.get("/",  messagesController.getAll);
router.get("/:id", messagesController.getById);
router.post("/" , messagesController.create);
router.put("/:id", messagesController.update);

module.exports = router;