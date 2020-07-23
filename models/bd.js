const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/schedule', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const { ObjectId } = mongoose.Schema.Types

const servicesSchema = mongoose.Schema({
  price: Number,
  duration: Date,
});

const services = mongoose.model('services', servicesSchema);

const service1 = new services({ price: 666, duration: '' });
service1.save(function (err) {
  if (err) return handleError(err);
  // saved!
});

const entriesSchema = new mongoose.Schema({
  dateBegin: Date,
  dateEnd: Date,
  nameClient: String,
  phone: String,
  serviceId: {
    type: ObjectId,
    ref: 'service1',
  }
});
const entries = mongoose.model('entries', entriesSchema);

const entry1 = new entries({
  dateBegin: null,
  dateEnd: null,
  nameClient: null,
  phone: null,
  serviceId: service1.id
});
entry1.save(function (err) {
  if (err) return handleError(err);
  // saved!
});

