/* GET home page */
const about = function(req, res){ 
res.render('index', { title: 'FilmNation About Page' }); 
};
module.exports = { 
about 
};
