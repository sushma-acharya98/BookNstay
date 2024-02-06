// controllers/bookingController.js
const Booking = require('../models/Booking');

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createBooking = async (req, res) => {
  // Implement booking creation logic
  // Example: const newBooking = await Booking.create(req.body);
  // Send back the created booking
};
