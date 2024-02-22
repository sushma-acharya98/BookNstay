import React from 'react';

const HotelList = ({ hotels }) => {
  return (
    <div>
      <h2>Hotels</h2>
      <ul>
        {hotels.map((hotel, index) => (
          <li key={index}>
            <p>{hotel.name}</p>
            <p>{hotel.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HotelList;