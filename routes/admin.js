const express = require('express');
const Entry = require('../models/entry');
const router = express.Router();
const { Service } = require('../models/service');

router.get('/', async (req, res) => {
  const day = '2020-07-25';
  const dateDiapasonBegin = new Date(`${day}T00:00:00`);
  const dateDiapasonEnd = new Date(`${day}T23:59:59`);

  const entriesOfDay = await Entry.find()
    .where('dateBegin')
    .gt(dateDiapasonBegin)
    .lte(dateDiapasonEnd)
    .sort('dateBegin')
    .populate('serviceId');
  console.log(entriesOfDay);
  res.render('admin', { entriesOfDay });
});

router.get('/newEntry', async (req, res) => {
  const services = await Service.find();
  console.log(services);
  res.render('adminNewEntry', { services });
  // res.render('adminNewEntry');
});

router.post('/newEntry', async (req, res) => {
  console.log(req.body);
  const dateBegin = new Date(`${req.body.date}T${req.body.time}`);
  const dateEnd = new Date(dateBegin);
  const service = await Service.findById(req.body.serviceId);
  dateEnd.setHours(dateEnd.getHours() + service.duration);
  // console.log(dateBegin);
  const { nameClient, phone, serviceId } = req.body;
  await Entry.create({
    dateBegin,
    dateEnd,
    nameClient,
    phone,
    serviceId,
  });
  res.send(req.body);
});

module.exports = router;
