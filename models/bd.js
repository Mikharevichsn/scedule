const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://shedule:shedule@cluster0.yuk4z.mongodb.net/shedule?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
