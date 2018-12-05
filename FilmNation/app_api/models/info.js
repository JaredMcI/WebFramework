const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema({

    description: String


});


mongoose.model('infos', infoSchema);

