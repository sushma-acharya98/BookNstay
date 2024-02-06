// controllers/roomController.js
const Room = require('../models/Room');

exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createRoom = async (req, res) => {
  // Implement room creation logic
  // Example: const newRoom = await Room.create(req.body);
  // Send back the created room
};
