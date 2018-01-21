import quickSort from '../lib/quick'
const assert = require ('chai').assert

describe('quick sort', () => {

  it ('quick sorts', () => {
    const numbers = [7, 31, 42, 5, 1, 16, 39, 40];
    assert.deepEqual(quickSort(numbers), [ 1, 5, 7, 16, 31, 39, 40, 42 ]);
  })

});
