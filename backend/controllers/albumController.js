const Album = require('./models/Album');

exports.addAlbum = async (req, res) => {
  const { albumName, artist, releaseYear, genre, coverImage } = req.body;
  try {
    const newAlbum = new Album({ albumName, artist, releaseYear, genre, coverImage });
    const savedAlbum = await newAlbum.save();
    res.status(200).json(savedAlbum);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAlbum = async (req, res) => {
  try {
    const albums = await Album.find();
    res.json(albums);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAlbumById = async (req, res) => {
  try {
    const album = await Album.findById(req.params.id);
    if (!album) return res.status(404).json({ message: 'Album not found' });
    res.json(album);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateAlbum = async (req, res) => {
  try {
    const updatedAlbum = await Album.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAlbum) return res.status(404).json({ message: 'Album not found' });
    res.json(updatedAlbum);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteAlbum = async (req, res) => {
  try {
    await Album.findByIdAndDelete(req.params.id);
    res.json({ message: 'Album deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};