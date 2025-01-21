const { calculateStats } = require('./utils');

test('calculateStats works correctly', () => {
  const numbers = [1, 2, 3, 4, 5];
  const stats = calculateStats(numbers);
  
  expect(stats.sum).toBe(15);
  expect(stats.average).toBe(3);
  expect(stats.max).toBe(5);
  expect(stats.min).toBe(1);
});