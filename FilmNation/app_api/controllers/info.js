const mongoose = require('mongoose');
const infos = mongoose.model('infos');

const InfoCreate = function (req, res) {
    info.create({
        description: req.body.description,
    }, (err, about) => {
        if (err) {
            res
                .status(400)
                .json(err);
        } else {
            res
                .status(201)
                .json(about);
        }
    });
};

const InfoReadOne = function (req, res) {
    if (req.params && req.params.infoid) {
        infos
            .findById(req.params.infoid)
            .exec((err, info) => {
                if (!info) {
                    res
                        .status(404)
                        .json({
                            "message": "infoid not found"
                        });
                    return;
                } else if (err) {
                    res
                        .status(404)
                        .json(err);
                    return;
                }
                res
                    .status(200)
                    .json(info);
            });
    } else {
        res
            .status(404)
            .json({
                "message": "No infoid in request"
            });
    }
};

const InfoUpdateOne = function (req, res) {
    if (!req.params.infoid) {
        res
            .status(404)
            .json({
                "message": "Not found, infoid is required"
            });
        return;
    }
    info
        .findById(req.params.infoid)
        .exec((err, about) => {
                if (!about) {
                    res
                        .json(404)
                        .status({
                            "message": "infoid not found"
                        });
                    return;
                } else if (err) {
                    res
                        .status(400)
                        .json(err);
                    return;
                }
                about.paragraph = req.body.paragraph;
                about.save((err, about) => {
                    if (err) {
                        res
                            .status(404)
                            .json(err);
                    } else {
                        res
                            .status(200)
                            .json(about);
                    }
                });
            }
        );
};

const InfoDeleteOne = function (req, res) {
    const infoid = req.params.infoid;
    if (infoid) {
        info
            .findByIdAndRemove(infoid)
            .exec((err, about) => {
                    if (err) {
                        res
                            .status(404)
                            .json(err);
                        return;
                    }
                    res
                        .status(204)
                        .json(null);
                }
            );
    } else {
        res
            .status(404)
            .json({
                "message": "No infoid"
            });
    }
};


module.exports = {
    InfoCreate,
    InfoReadOne,
    InfoUpdateOne,
    InfoDeleteOne,
};