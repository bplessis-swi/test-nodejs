const express = require('express');
const moment = require('moment');
const _ = require('lodash');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  const numbers = _.range(1, 6);
  const squared = _.map(numbers, n => n * n);
  
  res.json({
    message: "Hello from CI Cache Test!",
    time: currentTime,
    numbers: squared
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});