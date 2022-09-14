const express = require("express");
const router = express.Router();

const {
  getTvshows,
  getTvshow,
  createTvshow 
  } = require('../controllers/tvshowController');

const {
    createReview,
  } = require('../controllers/reviewController');

//GET ALL MOVIES
router.get("/", getTvshows);

//GET A SINGLE MOVIE and GET ALL REVIEWS
router.get("/:id", getTvshow);

//DELETE A SINGLE MOVIE
// router.delete("/:id", deleteTvshow);

//POST A SINGLE MOVIE INTO DATABASE
router.post('/', createTvshow);

//POST A REVIEW INTO DATABASE
router.post("/:id",createReview);

//DELETE A REVIEW

module.exports = router;