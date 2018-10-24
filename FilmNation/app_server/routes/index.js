var express = require('express');
var router = express.Router();

const ctrlHome = require('../controllers/home'); 
const ctrlOthers = require('../controllers/others');
/* Locations pages */
router.get('/', ctrlHome.filmList);
router.get('/info', ctrlHome.homeInfo);
router.get('/film', ctrlHome.filmInfo);
/* Other pages */
router.get('/about', ctrlOthers.about);
module.exports = router;
