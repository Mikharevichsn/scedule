const express = require('express');

const app = express();
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  let date1 = new Date(2011, 0, 1, 0, 0, 0, 0); // // 1 января 2011, 00:00:00
  console.log(date1);
  date1 = date1.toUTCString();
  console.log(date1);
  res.render('index', { date1 });
});

app.listen(3000);
