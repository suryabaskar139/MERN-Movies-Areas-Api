const movieModel = require("../models/movieModel");

exports.getMovies = async(req,res) => {
   try{
    const movies = await movieModel.find({});
    res.json({
        message : 'All Movies',
        movies
    });
   }
   catch(error){
    res.status(500).json({
        message : error.message
    })
   }
}

exports.createMovies = async(req,res) => {
    const newMovie = new movieModel({
        title : req.body.title,
        desc  : req.body.desc
    })

    try {
        const movie = await newMovie.save();
        return res.status(201).json({
            message : "Movie Created Sucessfully",
            movie
        })
        console.log(res.message);
    }

    catch(error){
        return res.status(404).json({
            message : error.message
        })
    }
}

exports.updateMovies = async(req,res) => {

    try {
        const updatedMovie = await movieModel.findByIdAndUpdate(
            {_id : req.params.id},
            {
              title : req.body.title,
              desc : req.body.desc
            },
            {new: true }
        )

        res.json({
            message : "Movie Updated Sucessfully",
            updatedMovie
        })

       
    } catch (error) {
        res.status(500).json({
            message : error.message
        })
    }
}

exports.deleteMovies = async(req,res) => {

    try {
        const deleteMovie = await movieModel.findByIdAndDelete({_id : req.params.id})
        res.json({
            message : "Movie Deleted Sucessfully"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

}