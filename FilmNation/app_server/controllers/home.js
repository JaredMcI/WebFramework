/* GET 'home' page */
const filmList = function(req, res){
res.render('index', { title: 'Film List' });
};
/* GET 'Location info' page */
const homeInfo = function(req, res){
res.render('index', { title: 'Home info' });
};
/* GET 'Add review' page */
const filmInfo = function(req, res){
res.render('index', { title: 'Film Name' });
};
module.exports = {
filmList,
homeInfo,
filmInfo
};
