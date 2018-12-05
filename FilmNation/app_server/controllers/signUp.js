/* GET 'signUp' page */
const register = function(req, res){
    res.render('signUp', { title: 'Register for FILM NATION' });
};
module.exports = {
    register
};