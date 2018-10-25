/* GET 'Login Page' page */
const login = function(req, res){
    res.render('index', { title: 'Log In Page' });
};
module.exports = {
    login
};