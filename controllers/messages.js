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