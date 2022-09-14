const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  title: {
    type: String,
    required: true
  },
  reviewGiven: {
    type: String,
    required: true
  },
   rating: {
    type: Number,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Review', reviewSchema)