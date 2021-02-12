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


    INSERT INTO trips(title, location, duration, comments) VALUES ('Canada (West Coast) Road Trip 2020 	&#x1F1E8&#x1F1E6', 'Ontario, The Prairies, The Mountains', 'Jun 26, 2020 - July 3, 2020', 'Made a 36 road trip from Toronto, Ontario to Banff, Alberta to see the mountains!');

    INSERT INTO trips(title, location, duration, comments) VALUES ('India 2020 &#x1F1EE&#x1F1F3', 'Northern India', 'Feb 14, 2020 - Feb 29, 2020', 'Visited India and got to see a lot of history!');

    INSERT INTO trips(title, location, duration, comments) VALUES ('Canada (East Coast) 2018 &#x1F1E8&#x1F1E6', 'Nova Scotia, New Brunswick', 'Oct 1, 2018 - Oct 18, 2018', 'Flew to the East Coast to feel the Atlantic breeze and eat some delicious lobsters!');

    INSERT INTO trips(title, location, duration, comments) VALUES ('Jamaica 2018 &#x1F1EF&#x1F1F2', 'Montego Bay', 'Jun 16, 2018 - Jun 22, 2018', 'Ya mon!');



    INSERT INTO attractions(tripid, name, picture, comments) VALUES (1, 'Banff', '/public/banff.png', 'This is the view from the highway, right before you enter the mountains. Amazing!');

    INSERT INTO attractions(tripid, name, picture, comments) VALUES (1, 'Lake Louise', '/public/lakelouise.JPG', 'The bluest water I have ever seen in my life!');

    INSERT INTO attractions(tripid, name, picture, comments) VALUES (1, 'Hike', '/public/mountain.JPG', 'This was a 10 hour hike!');



    INSERT INTO attractions(tripid, name, picture, comments) VALUES (2, 'Red Fort', '/public/redfort.jpg', 'This place has so much history, insane!');

    INSERT INTO attractions(tripid, name, picture, comments) VALUES (2, 'Agra Fort', '/public/agrafort.jpg', 'Another historical war fort near the Taj Mahal!');

    INSERT INTO attractions(tripid, name, picture, comments) VALUES (2, 'Taj Mahal', '/public/tajmahal.jpg', 'You do not appreciate how large the structure is until you get up and close.');



    INSERT INTO attractions(tripid, name, picture, comments) VALUES (3, 'Cabot Trail', '/public/cabottrail.jpg', 'Drove a 450km trail to see the fall colours!');

    INSERT INTO attractions(tripid, name, picture, comments) VALUES (3, 'Cape Spear', '/public/capespear.JPG', 'The Easternmost point in North America!');

    INSERT INTO attractions(tripid, name, picture, comments) VALUES (3, 'Peggy''s Cove', '/public/peggys.JPG', 'Definitely the most picturesque lighthouse!');

    INSERT INTO attractions(tripid, name, picture, comments) VALUES (3, 'Cape St. Mary''s Ecological Reserve', '/public/capestmarys.JPG', 'These birds welcomed us graciously into their home!');



    INSERT INTO attractions(tripid, name, picture, comments) VALUES (4, 'The Beach!', '/public/bluewater.JPG', 'Got sunburt. Totally worth it!');

    INSERT INTO attractions(tripid, name, picture, comments) VALUES (4, 'Sunset', '/public/jamaicasunset.JPG', 'Jamaican sunsets are to die for!');

    INSERT INTO attractions(tripid, name, picture, comments) VALUES (4, 'Trees', '/public/jamaicatrees.JPG', 'I miss the tropical weather!');


    `);
  } catch (err) {
    console.log(err);
  }
};
syncAndSeed();
module.exports = client;
