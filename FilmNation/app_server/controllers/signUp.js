/* GET 'signUp' page */
const register = function(req, res){
    res.render('index', { title: 'Register for FILM NATION' });
};
module.exports = {
    register
};