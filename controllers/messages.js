const Message = require('../models/messages');

const getAll = (req, res) => {
    let message = Message.find({}, (err, messages) => {
        if (err) {
            let result = {
                status: "error",
                message: "Oops, could not get messages"
            };
            res.json(result);
        } else {
            let result = {
                status: "success",
                message: "Messages retrieved",
                data: messages
            };
            res.json(result);
        }
    });
};

const create = (req, res) => {
    let user = req.body.user;
    let message = req.body.message;
    let newMessage = new Message();
    newMessage.user = user;
    newMessage.message = message;
    newMessage.save((err, message) => {
        if (err) {
            let result = {
                status: "error",
                message: "Oops, could not save message"
            };
            res.json(result);
        } else {
            let result = {
                status: "success",
                message: "Message saved",
                data: message
            };
            res.json(result);
        }
    });
};