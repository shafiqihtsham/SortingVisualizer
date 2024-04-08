import { displayInsertionSort } from "../utils/displayAlgorithm";
import { sleep } from "../utils/sleep";

async function insertionSort(array: number[], speed: number): Promise<void> {
  speed = speed === 100 ? (speed += 400) : (speed += 0);

  for (let i = 0; i < array.length; i++) {
    let j = i;
    displayInsertionSort(array, [j - 1, j], [], []);
    await sleep(speed);
    while (j > 0 && array[j - 1] > array[j]) {
      // Highlight the elements being compared
      displayInsertionSort(array, [j - 1, j], [], []);
      await sleep(speed);

      // Swap the elements
      const temp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp;

      displayInsertionSort(array, [], [], [j, j - 1]);
      await sleep(speed);

      j--;
    }
    displayInsertionSort(array, [], [i], []);
    await sleep(speed);
  }

  // Display final state of the array after sorting
  displayInsertionSort(array);
}

export { insertionSort };
