const express = require("express");
const router = express.Router();

const {
    createMovie, 
    getMovies,
    getMovie,
    deleteMovie
  } = require('../controllers/movieController');

const {
    createReview,
    deleteReview
  } = require('../controllers/reviewController');

//GET ALL MOVIES
router.get("/", getMovies);

//GET A SINGLE MOVIE and GET ALL REVIEWS
router.get("/:id", getMovie);

//DELETE A SINGLE MOVIE
router.delete("/:id", deleteMovie);

//POST A SINGLE MOVIE INTO DATABASE
router.post('/', createMovie);

//POST A REVIEW INTO DATABASE
router.post("/:id",createReview);

//DELETE A REVIEW

module.exports = router;