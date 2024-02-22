const mongoose = require('mongoose');
const { Schema } = mongoose;

const homeSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  // You can add more fields as needed for your home page content
});

const Home = mongoose.model('Home', homeSchema);

module.exports = Home;
