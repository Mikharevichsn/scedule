const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

const entriesSchema = new mongoose.Schema({
  dateBegin: Date,
  dateEnd: Date,
  nameClient: String,
  phone: String,
  serviceId: {
    type: ObjectId,
    ref: 'services',
  },
});
const Entry = mongoose.model('entries', entriesSchema);

module.exports = { Entry };
