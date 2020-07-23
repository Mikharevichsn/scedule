const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://shedule:<password>@cluster0.yuk4z.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


//mongodb+srv://shedule:<password>@cluster0.yuk4z.mongodb.net/<dbname>?retryWrites=true&w=majority
