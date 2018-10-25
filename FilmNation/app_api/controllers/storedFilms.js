const mongoose = require('mongoose');
const Loc = mongoose.model('film');


const storedFilmsCreate = function (req, res) {
    const locationsCreate = function (req, res) {
        res
            .status(200)
            .json({"status" : "success"});
    };
};
const storedFilmsReadOne = function (req, res) {
    const locationsCreate = function (req, res) {
        res
            .status(200)
            .json({"status" : "success"});
    };
};
const storedFilmsUpdateOne = function (req, res) {
    const locationsCreate = function (req, res) {
        res
            .status(200)
            .json({"status" : "success"});
    };
};
const storedFilmsDeleteOne = function (req, res) {
    const locationsCreate = function (req, res) {
        res
            .status(200)
            .json({"status" : "success"});
    };
};

module.exports = {
    storedFilmsCreate,
    storedFilmsReadOne,
    storedFilmsDeleteOne,
    storedFilmsUpdateOne
};