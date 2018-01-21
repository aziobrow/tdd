function quickSort(unsortedArray) {
  if(unsortedArray.length <= 1) {
    return unsortedArray;
  };

  const pivot =  unsortedArray.splice(Math.floor(Math.random() * unsortedArray.length),1);
  const left = []
  const right = []

  for (var i = 0 ; i < unsortedArray.length; i++){
      if ( unsortedArray[i] <= pivot) {
        left.push(unsortedArray[i]);
      } else {
        right.push(unsortedArray[i]);
      }
    }
  return (quickSort(left)).concat([pivot], quickSort(right));
}

export default quickSort;
