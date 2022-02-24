const mongoose = require('mongoose');

// const starterTrackSchema = mongoose.Schema({
//     trackName: String,
//     trackUrl: String,

// })

// const responseTrackSchema = mongoose.Schema({
//     trackName: String,
//     trackUrl: String,

// })

const commentSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    textContent: String,
    date: Date,
    track1Url: String,
    track1Name: String,
    // track2Url: String,
    // track2Name: String,
})





const projectSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title: String,
    description: String,
    coverArtUrl: String,
    trackUrl: String,
    trackName: String,
    // track2Url: String,
    // track2Name: String,
    comments: [commentSchema]
  },
  {
    timestamps: true
  })
 
  module.exports = mongoose.model('Project', projectSchema);