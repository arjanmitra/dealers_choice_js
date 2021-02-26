const express = require('express');
const morgan = require('morgan');
const path = require('path');
/* VS code does this annoying thing where if you make a typo,
it thinks you're trying to import a module
and then auto-imports random modules into your code
watch out for these in your code, i think that's what is below */
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
