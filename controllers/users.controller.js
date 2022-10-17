const User = require('../models/User.model');

module.exports.usersController = {

    createUsers: (req, res) => {
        const { name, surname } = req.body;
        User.create(
            {
                name,
                surname
            },
            (err, data) => {
                res.json(data)
            }
        )
    },

    deleteUsers: (req, res) => {
        const { name, surname } = req.body;
        User.remove(
            { 
                name,
                surname
            },
            (err, data) => {
                res.json(data)
            }
        )
    },
    getUsers: (req, res) => {
        User.find({}, (err, data) => {
            res.json(data)
        })
    },
    getUsersById: (req, res) => {
        User.findById(req.params.id, (err, data) => {
            res.json(data)
        }
        )
    },
    createSavs: (req, res) => {
        User.findByIdAndUpdate(req.params.id, {$push: {savs: req.body.userId}}, (err, data) => {
            res.json(data)
        })
    }
    
}