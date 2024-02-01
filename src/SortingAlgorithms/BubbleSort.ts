function bubbleSort(array: number[]): number[][] {
  const swaps= [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        swaps.push([j, j+1])
        const temp: number = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return swaps;
  
}

export { bubbleSort };


