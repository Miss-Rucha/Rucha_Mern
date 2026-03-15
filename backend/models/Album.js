const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema(
  {
    albumName: { type: String, required: true },
    artist: { type: String, required: true },
    releaseYear: { type: Number, required: true },
    genre: { type: String, required: true },
    coverImage: { type: String, required: true }
  },
  { timestamps: true }
);

const Album = mongoose.model('Album', albumSchema);

module.exports = Album