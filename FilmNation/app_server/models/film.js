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
mongoose.model('film', filmSchema);

