const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

const mainpage = require('./mainpage');

const port = process.env.port || 1337;

app.use(morgan('dev'));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`App listening in port ${port}`);
});

app.get('/', async (req, res, next) => {
  res.send(mainpage());
});
