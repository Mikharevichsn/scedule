const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  let date1 = new Date(2011, 0, 1, 0, 0, 0, 0); // // 1 января 2011, 00:00:00
  console.log(date1);
  let date2 = new Date(Date.parse('2020-07-03 10:00:00'));
  res.render('index', { date1, date2 });
});

app.get('/newEntry', (req, res) => {
  res.render('newEntry');
});

app.post('/newEntry', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

let date1 = new Date(2011, 0, 1, 0, 0, 0, 0); // // 1 января 2011, 00:00:00
let date2 = new Date(Date.parse('2020-07-03 10:00:00'));
console.log(date1 < date2);

console.log(date1);
console.log(date2);

app.listen(3000);
