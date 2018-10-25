var express = require('express');
var router = express.Router();

const ctrlHome = require('../controllers/home'); 
const ctrlOthers = require('../controllers/others');
const ctrlSignUp = require('../controllers/signUp');
const ctrlLogIn = require('../controllers/login');


router.get('/', ctrlHome.home);
router.get('/signUp', ctrlSignUp.register);
router.get('/login', ctrlLogIn.login);
router.get('/info', ctrlOthers.about);


module.exports = router;
