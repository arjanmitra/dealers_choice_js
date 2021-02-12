const express = require('express');
const router = express.Router();
const client = require('../db');
const mainpage = require('../views/mainpage');
const detailspage = require('../views/detailspage');

router.get('/', async (req, res, next) => {
  const result = await client.query(`
  select * from trips`);
  const posts = result.rows;
  res.send(mainpage(posts));
});

router.get('/:id', async (req, res, next) => {
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

module.exports = router;
