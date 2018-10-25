const mongoose = require('mongoose');

const Actorschema = new mongoose.Schema({
    lead: String,
    secondary: String,
    support: String

});


const filmSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    rating:{
        type: Number,
        'default': 0
    }
    ,
    director: [String],
    budget: {
        type: Number,
        'default': 0
    },
    actors: [Actorschema]
});
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name: String

});


mongoose.model('film', filmSchema);
mongoose.model('user', userSchema);

