const mongoose = require('mongoose');

const servicesSchema = mongoose.Schema({
  title: String,
  price: Number,
  duration: Number,
});

const Service = mongoose.model('services', servicesSchema);

module.exports = { Service };
