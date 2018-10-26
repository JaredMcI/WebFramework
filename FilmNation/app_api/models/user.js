const mongoose = require('mongoose');

const storedFilmSchema = new mongoose.Schema({
    title: String

})


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        //required: true
    },
    password: {
        type: String,
        //required: true
    },
    email: {
        type: String,
        //required: true
    },
    name: String,
    storedFilms: [storedFilmSchema]

});

mongoose.model('user', userSchema);
