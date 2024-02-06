'use client'
import React from 'react';
import BookingManagement from './boookingManagement/page';
import RoomManagement from './roomManagement/page';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <BookingManagement />
      <RoomManagement />
    </div>
  );
};

export default Dashboard;
