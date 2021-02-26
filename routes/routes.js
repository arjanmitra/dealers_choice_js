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
     /*you should be using parameters in your query, instead of adding
      the id directly into the query. this is a big security vulnerability.
      from the node-pg docs:
      "If you are passing parameters to your queries you will want to avoid string concatenating parameters into the query text directly. This can (and often does) lead to sql injection vulnerabilities. node-postgres supports parameterized queries, passing your query text unaltered as well as your parameters to the PostgreSQL server where the parameters are safely substituted into the query with battle-tested parameter substitution code within the server itself."
      SQL injection means that someone who is very adept at SQL could write a query that would do something
      malicious like delete your entire database. imagine if this was published to the web! when you use parameters like:
        client.query('SELECT * FROM trips WHERE trips.id = $1', [id])
      node-pg does things in the background to ensure that the parameters are not valid sql, which prevents sql injection.
      */
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
