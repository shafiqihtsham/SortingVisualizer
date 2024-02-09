// left to right
// examine each item and compare to item on left
// insert the item in the correct position in the array
// first element has no elements to left of it.
// the elements on the left will begin to be sorted where as the elements
// on the right will be unsorted

function insertionSort(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    let j = i;
    while (j > 0) {
      if (array[j - 1] > array[j]) {
        const temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      } else j--;
    }
  }
  return array;
}

export { insertionSort };
