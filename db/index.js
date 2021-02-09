const pg = require('pg');
const client = new pg.Client('postgres://localhost/dealerschoice');

const syncAndSeed = async () => {
  try {
    await client.connect();
    console.log('connected to localhost');
    await client.query(`
    DROP TABLE IF EXISTS attractions;
    DROP TABLE IF EXISTS trips;

    CREATE TABLE trips(
      id SERIAL PRIMARY KEY,
      title VARCHAR(100) NOT NULL,
      location VARCHAR(100) NOT NULL,
      duration VARCHAR(100) NOT NULL,
      comments TEXT NOT NULL
    );

    CREATE TABLE attractions(
      id SERIAL PRIMARY KEY,
      tripid INTEGER REFERENCES trips(id) NOT NULL,
      name VARCHAR(100) NOT NULL,
      cost INTEGER,
      picture VARCHAR(500) NOT NULL,
      comments TEXT NOT NULL
    );

    INSERT INTO trips(title, location, duration, comments) VALUES ('India 2020', 'Northern India', 'Feb 14, 2020 - Feb 29, 2020', 'Visited India and got to see a lot of history!');
    INSERT INTO trips(title, location, duration, comments) VALUES ('Canada Road Trip 2020', 'Ontario, The Prairies, The Mountains', 'Jun 26, 2020 - July 3, 2020', 'Made a 36 road trip from Toronto, Ontario to Banff, Alberta to see the mountains!');

    INSERT INTO attractions(tripid, name, picture, comments) VALUES (1, 'Red Fort', '/public/mountain.JPG', 'Visited the Red Fort!');
    `);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  client,
  syncAndSeed,
};
