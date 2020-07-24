const express = require('express');
const router = express.Router();
const service = require('../models/service');
const checkDate = require('../getBusyTime');
const { Service } = require('../models/service');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/newEntryStep2', async (req, res) => {
  const { date, serviceId } = req.query;
  // console.log(req.query);
  // console.log(date, serviceId);
  const service = await Service.findById(serviceId);
  const vacantTimes = await checkDate(date, service.duration);
  // console.log('>>>>>', vacantTimes);
  res.render('newEntryStep2', { vacantTimes });
});

router.get('/newEntry', async (req, res) => {
  const services = await Service.find();
  // console.log(services);
  res.render('newEntry', { services });
});

router.post('/newEntry', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

module.exports = router;

// console.log(checkDate('2020-07-23'));
// checkDate('2020-07-23', 1).then((data) => console.log(data));
