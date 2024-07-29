const express = require('express');
const Playlist = require('../models/Playlist');
const User = require('../models/User');

const router = express.Router();

// Create Playlist
router.post('/', async (req, res) => {
  const { name, userId } = req.body;
  try {
    const user = await User.findById(userId);
    const newPlaylist = new Playlist({ name, user: user._id });
    await newPlaylist.save();
    user.playlists.push(newPlaylist._id);
    await user.save();
    res.status(201).json(newPlaylist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Playlists
router.get('/:userId', async (req, res) => {
  try {
    const playlists = await Playlist.find({ user: req.params.userId });
    res.status(200).json(playlists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
