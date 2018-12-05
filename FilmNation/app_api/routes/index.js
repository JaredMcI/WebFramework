
const express = require('express');
const router = express.Router();
const ctrlAbout = require('../controllers/info');
const ctrlUsers = require('../controllers/users');
const ctrlFilms = require('../controllers/films');
const ctrlStoredFilms = require('../controllers/storedFilms');



// users
router
    .route('/users')
    .get(ctrlUsers.UsersCreate)
    .post(ctrlUsers.UsersCreate);
router
    .route('/users/:userid')
    .get(ctrlUsers.UsersReadOne)
    .put(ctrlUsers.UsersUpdateOne)
    .delete(ctrlUsers.UsersDeleteOne);

// storedFilms
router
    .route('/users/:userid/storedFilms')
    .post(ctrlStoredFilms.storedFilmsCreate);

router
    .route('/users/:userid/storedFilms/:storedFilmid')
    .get(ctrlStoredFilms.storedFilmsReadOne)
    .put(ctrlStoredFilms.storedFilmsUpdateOne)
    .delete(ctrlStoredFilms.storedFilmsDeleteOne);


// films
router
    .route('/films')
    .get(ctrlFilms.FilmsCreate)
    .post(ctrlFilms.FilmsCreate);

router
    .route('/films/:filmid')
    .get(ctrlFilms.FilmsReadOne)
    .put(ctrlFilms.FilmsUpdateOne)
    .delete(ctrlFilms.FilmsDeleteOne);

// info
router
    .route('/info')
    .get(ctrlAbout.InfoCreate)
    .post(ctrlAbout.InfoCreate);

router
    .route('/info/:infoid')
    .get(ctrlAbout.InfoReadOne)
    .put(ctrlAbout.InfoUpdateOne)
    .delete(ctrlAbout.InfoDeleteOne);


module.exports = router;

