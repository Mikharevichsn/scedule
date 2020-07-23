const express = require('express');
const router = express.Router();




router.get('/', (req, res) => {
  res.render('index')
})


// router.post('/', (req, res) => {
//   // let a = req.body;
//   // console.log(a)
//   res.render('index')
//   // res.reddirect('newEntry')
// })

//selectDate

router.get('/newEntry', (req, res) => {
  res.render('newEntry')
})


module.exports = router;

