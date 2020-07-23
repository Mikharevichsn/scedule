const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/schedule', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
