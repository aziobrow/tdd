// import { expect } from 'chai';
import mergeSort from '../lib/merge'
const assert = require ('chai').assert

describe('merge sort', () => {

  xit ('merge sorts', () => {
    const numbers = [7, 31, 42, 5, 1, 16, 39, 40];
    assert.deepEqual(mergeSort(numbers), [ 1, 5, 7, 16, 31, 39, 40, 42 ]);
  })

});
