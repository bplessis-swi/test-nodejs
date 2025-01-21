const _ = require('lodash');

function calculateStats(numbers) {
  return {
    sum: _.sum(numbers),
    average: _.mean(numbers),
    max: _.max(numbers),
    min: _.min(numbers)
  };
}

module.exports = { calculateStats };