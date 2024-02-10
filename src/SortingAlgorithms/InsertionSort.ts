function insertionSort(array: number[]): number[][] {
  const swaps = [];
  for (let i = 0; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j - 1] > array[j]) {
      swaps.push([j, j-1])
      const temp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp;
      j--;
    }
  }
  return swaps;
}

export { insertionSort };
