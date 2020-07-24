const express = require('express');
const app = express();
const path = require('path');
const db = require('./models/bd');
const morgan = require('morgan');

const indexRouter = require('./routes/index');
const adminRouter = require('./routes/admin');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/admin', adminRouter);

app.listen(process.env.PORT || 3000);
