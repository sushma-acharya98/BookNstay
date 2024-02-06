// // components/RoomManagement.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const RoomManagement = () => {
//   const [rooms, setRooms] = useState([]);

//   useEffect(() => {
   
//     axios.get('/api/rooms').then((response) => setRooms(response.data));
//   }, []);

//   return (
//     <div>
//       <h3>Room Management</h3>
//       {/*  how to Display rooms here  */}
//     </div>
//   );
// };

// export default RoomManagement;
