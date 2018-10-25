/* GET 'Login Page' page */
const login = function(req, res){
    res.render('login', { title: 'Log In Page' });
};
module.exports = {
    login
};