const Movie = require("../models/moviesModel");
const Review = require("../models/reviewsModel");

const mongoose = require("mongoose");

// get all Movies
const getMovies = async (req, res, next) => {
  const movies = await Movie.find({}).sort({ createdAt: -1 });
  res.status(200).json(movies);
};

// get a single Movie
const getMovie = async (req, res) => {
  let { id } = req.params;
  id=id.substring(0,24);
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Movieee" });
  }
  const movie = await Movie.findById(id);
  if (!movie) {
    return res.status(404).json({ error: "No such Movie" });
  }
  const review = await Review.find({}).sort({ createdAt: -1 });
  res.status(200).json({ movie, review });
};

// create a new Movie
const createMovie = async (req, res) => {
  const { title, year, runtime, genres, director,plot, posterUrl } = req.body;
  //add data to mongodb
  try {
    const movie = await Movie.create({
      title,
      year,
      runtime,
      genres,
      director,
      plot,
      posterUrl,
    });
    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteMovie = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such Movie'})
  }

  const movie = await Movie.findOneAndDelete({_id: id})

  if(!movie) {
    return res.status(400).json({error: 'No such Movie'})
  }

  res.status(200).json(movie)
}

//

module.exports = {
  getMovies,
  getMovie,
  createMovie,
  deleteMovie
};
