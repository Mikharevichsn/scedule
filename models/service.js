const mongoose = require('mongoose');

const servicesSchema = mongoose.Schema({
  price: Number,
  duration: Date,
});

const Service = mongoose.model('services', servicesSchema);

module.exports = { Service };
