// const mongoose = require('mongoose');

// const connection = async () => {
//   try {
//       const isConnected = await mongoose.connect('mongodb://127.0.0.1:27017/bookingDb');
//       if (isConnected) {
//               console.log('Connected to MongoDB');
//             }
//           } catch (err) {
//             console.error(err);
//           }
//         };

//   module.exports = connection;
              
const mongoose = require('mongoose');
const connection = async () => {
  try {
      const isConnected = await mongoose.connect('mongodb://127.0.0.1:27017/bookingDb');
      if (isConnected) {
              console.log('Connected to MongoDB');
            }
          } catch (err) {
            console.error(err);
          }
        };

  module.exports = connection;
              