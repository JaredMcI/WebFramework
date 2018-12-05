const request = require('request');

const apiOptions = {
    server: 'http://localhost:3000'
};
// /* GET home page */
// const about = function(req, res){
// res.render('index', { title: 'FilmNation About Page' });
// };
// module.exports = {
// about
// };


const renderInfoPage = function(req, res, responseBody){
    let message = null;
    if (!(responseBody)) {
        message = "API lookup error";
        responseBody = [];
    }
    console.log(responseBody);
    res.render('index', {
        title: 'FilmNation About Page.',

        info: responseBody,
        message: message,
    });
};

/* GET about page */

const about = function(req, res,body){
    const path = `/api/info/5c0801faedcdbf231f45a9be` ;
    const requestOptions = {
        url : apiOptions.server + path,
        method : 'GET',
        json : {},

    };
    console.log("Before request");
    request(requestOptions, (err, response, body) => {

            renderInfoPage(req, res, body);
            console.log(body.description);

        }

    );
};


module.exports = {
    about

};
