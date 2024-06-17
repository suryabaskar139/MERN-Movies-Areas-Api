const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title : {type : String, required : true, unique : true},
    desc : {type : String, required : true}
})

const movieModel = mongoose.model("Movie",movieSchema);

module.exports = movieModel;