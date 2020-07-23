const express = require('express');
const router = express.Router();
const service = require('../models/service');
const { Service } = require('../models/service');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/newEntry',async (req, res) => {
  const services = await Service.find();
  console.log(services);
  res.render('newEntry', {services});
});

router.post('/newEntry', (req, res) => {

  console.log(req.body);
  res.send(req.body);
});

module.exports = router;
