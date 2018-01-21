function mergeSort (array)  {
  if (array.length === 1) {
    return array;
  }
  var halfway = Math.ceil(array.length / 2)
  var leftArray = array.splice(0, halfway)
  var rightArray = array

  return merge(mergeSort(leftArray), mergeSort(rightArray))
}

function merge(left, right) {
  let results = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

    while (left.length)  {
      results.push(left.shift());
    }

    while (right.length) {
      results.push(right.shift());
    }

    return results;
}



export default mergeSort;
