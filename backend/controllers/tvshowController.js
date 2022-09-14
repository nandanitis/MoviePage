const Tvshow = require("../models/tvshowModel");
const Review = require("../models/reviewsModel");

const mongoose = require("mongoose");

// get all TVshows
const getTvshows = async (req, res, next) => {
  const tvshows = await Tvshow.find({}).sort({ createdAt: -1 });
  res.status(200).json(tvshows);
};

// get a single Tvshow
const getTvshow = async (req, res) => {
  let { id } = req.params;
  id=id.substring(0,24);
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Movieee" });
  }
  const tvshow = await Tvshow.findById(id);
  if (!tvshow) {
    return res.status(404).json({ error: "No such Movie" });
  }
  const review = await Review.find({}).sort({ createdAt: -1 });
  res.status(200).json({ tvshow, review });
};

// create a new TV Show
const createTvshow = async (req, res) => {
  const { title, year, runtime, genres, director,plot, posterUrl } = req.body;
  //add data to mongodb
  try {
    const tvshow = await Tvshow.create({
      title,
      year,
      runtime,
      genres,
      director,
      plot,
      posterUrl,
    });
    res.status(200).json(tvshow);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// const deleteMovie = async (req, res) => {
//   const { id } = req.params

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(400).json({error: 'No such Movie'})
//   }

//   const movie = await Movie.findOneAndDelete({_id: id})

//   if(!movie) {
//     return res.status(400).json({error: 'No such Movie'})
//   }

//   res.status(200).json(movie)
// }

//

module.exports = {
  getTvshows,
  getTvshow,
  createTvshow,
};
