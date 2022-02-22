const mongoose = require('mongoose');

const originalTrackSchema = mongoose.Schema({
    trackName: String,
    trackUrl: String,

})

const responseTrackSchema = mongoose.Schema({
    trackName: String,
    trackUrl: String,

})

const commentSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    textContent: String,
    date: Date,
    responseTracks: [responseTrackSchema]
})





const projectSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title: String,
    description: String,
    date: Date,
    originalTracks: [originalTrackSchema],
    comments: [commentSchema]
  })
 
  module.exports = mongoose.model('Project', projectSchema);