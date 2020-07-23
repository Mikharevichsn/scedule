const express = require('express');
const Entry = require('../models/entry');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('admin');
});

router.get('/newEntry', (req, res) => {
  res.render('adminNewEntry');
});

router.post('/newEntry', async (req, res) => {
  console.log(req.body);
  const dateBegin = new Date(`${req.body.date}T${req.body.time}`);
  const dateEnd = new Date(dateBegin);
  dateEnd.setHours(dateEnd.getHours() + 2);
  // console.log(dateBegin);
  const { nameClient, phone } = req.body;
  await Entry.create({
    dateBegin,
    dateEnd,
    nameClient,
    phone,
  });
  res.send(req.body);
});

module.exports = router;
