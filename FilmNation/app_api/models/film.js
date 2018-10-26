const mongoose = require('mongoose');

const ActorSchema = new mongoose.Schema({
    name: String,
    role: String

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
    actors: [ActorSchema]
});


mongoose.model('film', filmSchema);

