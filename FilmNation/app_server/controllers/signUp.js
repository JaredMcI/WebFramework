/* GET 'signUp' page */
const register = function(req, res){
    res.render('signup', { title: 'Register for FILM NATION' });
};
module.exports = {
    register
};