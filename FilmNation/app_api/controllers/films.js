const mongoose = require('mongoose');
const Loc = mongoose.model('film');



    const  FilmsCreate = function (req, res) {
        res
            .status(200)
            .json({"status" : "success"});
    };


    const FilmsReadOne = function (req, res) {
        res
            .status(200)
            .json({"status" : "success"});
    };


    const FilmsUpdateOne = function (req, res) {
        res
            .status(200)
            .json({"status" : "success"});
    };

    const FilmsDeleteOne = function (req, res) {
        res
            .status(200)
            .json({"status" : "success"});

};

module.exports = {
    FilmsCreate,
    FilmsReadOne,
    FilmsUpdateOne,
    FilmsDeleteOne

};