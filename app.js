const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { client, syncAndSeed } = require('./db');
const app = express();

const mainpage = require('./views/mainpage');
const detailspage = require('./views/detailspage');

syncAndSeed();
const port = process.env.port || 1337;

app.use(morgan('dev'));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`App listening in port ${port}`);
});

app.get('/', async (req, res, next) => {
  const result = await client.query(`
  select * from trips`);
  const posts = result.rows;
  res.send(mainpage(posts));
});

app.get('/trips/:id', async (req, res, next) => {
  try {
    id = req.params.id;
    const result = await client.query(`
    select * from trips inner join
    attractions on trips.id = attractions.tripid
    where tripid = ${id}`);
    const attraction = result.rows;
    res.send(detailspage(attraction));
  } catch (err) {
    next(err);
  }
});
