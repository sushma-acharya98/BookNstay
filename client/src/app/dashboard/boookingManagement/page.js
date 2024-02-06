'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingManagement = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch bookings from the backend
    axios.get('/api/bookings').then((response) => setBookings(response.data));
  }, []);

  return (
    <div>
      <h3>Booking Management</h3>
      {/* how to display bookings */}
    </div>
  );
};

export default BookingManagement;
