// const mongoose = require('mongoose');
// const userSchema = new mongoose.Schema({
//   phoneNumber: {type:String, unique: true, required: true}, 
//   email: { type: String, unique: true, required: true },
//   fullName: String,
//   password: String
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;
const mongoose = require('mongoose')
const { Schema } = mongoose;
const userSchema = new Schema({
  phoneNumber: {type:String, unique: true, required: true},
  email: {type:String, unique: true, required: true},
  fullName: String,
  role: {
    type: String,
    enum: ['user','admin'],
    default: 'user'
  },
  password: String
});

const User = mongoose.model('User', userSchema)
module.exports = User