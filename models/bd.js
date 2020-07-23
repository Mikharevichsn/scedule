const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/schedule', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const servicesSchema = mongoose.Schema({
  price: Number,
  duration: String,
});
const services = mongoose.model('services', servicesSchema);

const kal = new services({ price: 666 , duration: 'kal'});
kal.save(function (err) {
  if (err) return handleError(err);
  // saved!
});

// const entriesSchema = new mongoose.Schema({
//   dateBegin: String,
//   dateEnd: Number,
//   nameClient: String,
//   phone: String,
// });
// const entries = mongoose.model('entries', entriesSchema);

