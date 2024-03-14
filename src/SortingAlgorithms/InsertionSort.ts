import { displayArray } from "../utils/displayArray";
import { sleep } from "../utils/sleep";

// last swap not displaying 

async function insertionSort(array: number[]): Promise<void> {
  const swaps = [];
  for (let i = 0; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j - 1] > array[j]) {
      displayArray(array, [j, j - 1], [], []);
      await sleep(30);
      displayArray(array, [], [j, j - 1], []);
      await sleep(30)
      swaps.push([j, j - 1]);
      const temp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp;
      j--;
    }
  }
}

export { insertionSort };
