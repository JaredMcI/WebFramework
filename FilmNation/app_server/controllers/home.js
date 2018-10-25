/* GET 'home' page */
const home = function(req, res){
res.render('index', { title: 'Welcome to FILMNATION' });
};
module.exports = {
home
};
