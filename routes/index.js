const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/newEntry', (req, res) => {
  res.render('newEntry');
});

router.post('/newEntry', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

module.exports = router;
