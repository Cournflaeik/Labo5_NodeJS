const Message = require('../models/messages');

const getAll = (req, res) => {
    // check for query user
    if (req.query.user) {
        let user = req.query.user;
        const response = {
            status: "success",
            message: "GETTING messages from user: " + user,
            data: {user: user, message: "Hello"}
        }   
        res.json(response);
    } else {
        const response = {
            status: "success",
            message: "GETTING all messages",
            data: [
                {user: "Anna", message: "Hello there"}, 
                {user: "Dirk", message: "General Kenobi"}, 
                {user: "Anna", message: "You are a bold one"}
            ]
        }
        res.json(response);
    }
};

const getById = (req, res) => {
    const id = req.params.id;
    const response = {
        status: "success",
        message: "GETTING message with id: " + id,
        data: {id: id, user: "Anna", message: "Hello there"}
    }
    res.json(response);
};

const create = (req, res) => {
    let user = req.body.user;
    let message = req.body.message;
    const response = {
        status: "success",
        message: "CREATING message from user: " + user,
        data: {user: user, message: message}
    }
    res.json(response);
};

const update = (req, res) => {
    const id = req.params.id;
    let user = req.body.user;
    let message = req.body.message;
    const response = {
        status: "success",
        message: "UPDATING message with id: " + id,
        data: {id: id, user: user, message: message}
    }
    res.json(response);
};

const deleteById = (req, res) => {
    const id = req.params.id;
    const response = {
        status: "success",
        message: "DELETING message with id: " + id,
        data: {id: id }
    }
    res.json(response);
};

module.exports = {
    getAll,
    create,
    getById,
    update,
    deleteById
};