// /* GET home page */
// const about = function(req, res){
// res.render('index', { title: 'FilmNation About Page' });
// };
// // module.exports = {
// // about
// // };


const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://still-castle-60772.herokuapp.com/';
}


const renderAboutPage = function(req, res, Body){
    let message = null;
    if (!(Body)) {
        message = "API based error";
        Body = [];

    }
    console.log(Body);
    res.render('index', {
        title: 'Welcome to FilmNation',

        abouts: Body,
        message: message,
    });
};

/* GET about page */
const about = function(req, res,body){
    const path = `/api/abouts/5c014385e158e021ac506ccc` ;
    const postData = {
        paragraph: body.paragraph
    };
    const requestOptions = {
        url : apiOptions.server + path,
        method : 'GET',
        json : {},
        // qs : {
        //     paragraph : 'Testing'
        // }
    };
    console.log("Before request");
    request(requestOptions, (err, response, body) => {

            _renderAboutpage(req, res, body);
            console.log(body.paragraph);
            // console.log(body);
        }

    );
};


module.exports = {
    about
    //aboutCreate
};
