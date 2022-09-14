const Review = require("../models/reviewsModel");
const mongoose = require("mongoose");

// create a new Review
const createReview = async (req, res) => {
  const {name, title, reviewGiven, rating } = req.body;
  //add data to mongodb
  try {
    const review = await Review.create({
      name,
      title,
      reviewGiven,
      rating,
    });
    res.status(200).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

};

// delete a workout
const deleteReview = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such Review'})
  }

  const workout = await Review.findOneAndDelete({_id: id})

  if(!Review) {
    return res.status(400).json({error: 'No such Review'})
  }

  res.status(200).json(workout)
}


module.exports = {
  createReview,
  deleteReview
};
