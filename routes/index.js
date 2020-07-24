const express = require('express');
const router = express.Router();
const service = require('../models/service');
const checkDate = require('../getBusyTime');
const { Service } = require('../models/service');
const Entry = require('../models/entry');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/newEntryStep2', async (req, res) => {
  const { date, serviceId } = req.query;
  // console.log(req.query);
  // console.log(date, serviceId);
  const service = await Service.findById(serviceId);
  const vacantTimesTmp = await checkDate(date, service.duration);
  // console.log('>>>>>', vacantTimes);
  let vacantTimes = [];
  for (let elem of vacantTimesTmp) {
    vacantTimes.push(elem.replace(/(\:0 )|(\:0$)/g, ':00 '));
  }
  res.render('newEntryStep2', { vacantTimes, date, service });
});

router.post('/newEntryStep3addEntry', async (req, res) => {
  console.log(req.body);
  // const { ateBegin, dateEnd, nameClient, phone, serviceId } = req.body;
  const newEntry = req.body;
  await Entry.create(newEntry);
  res.send('Запись добавлена! Спасибо!');
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
