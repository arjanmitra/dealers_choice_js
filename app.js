const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { nextTick } = require('process');
const app = express();

const port = process.env.port || 1337;

app.use(morgan('dev'));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/trips', require('./routes/routes'));

app.get('/', (req, res, next) => res.redirect('/trips'));

app.listen(port, () => {
  console.log(`App listening in port ${port}`);
});
