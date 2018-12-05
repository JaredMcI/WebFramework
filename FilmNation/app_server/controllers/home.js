/* GET 'home' page */
const home = function(req, res){
res.render('home', { title: 'Welcome to FILMNATION' });
};
module.exports = {
home
};
