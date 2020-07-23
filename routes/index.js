const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

const service = require('../models/service');
const { Service } = require('../models/service');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/newEntry', (req, res) => {
  res.render('newEntry');
});

router.post('/newEntry', async(req, res) => {
  await Service.find({title});
  console.log(req.body);
  res.send(req.body);
});

module.exports = router;
