const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('admin');
});

router.get('/newEntry', (req, res) => {
  res.render('adminNewEntry');
});

router.post('/newEntry', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

module.exports = router;
