import { displayArray } from "../utils/displayInsertionSort";
import { sleep } from "../utils/sleep";

async function insertionSort(array: number[], speed: number): Promise<void> {
  speed = speed === 100 ? (speed += 400) : (speed += 0);

  for (let i = 0; i < array.length; i++) {
    let j = i;
    displayArray(array, [j - 1, j], [], []);
    await sleep(speed);
    while (j > 0 && array[j - 1] > array[j]) {
      // Highlight the elements being compared
      displayArray(array, [j - 1, j], [], []);
      await sleep(speed);

      // Swap the elements
      const temp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp;

      displayArray(array, [], [], [j, j - 1]);
      await sleep(speed);

      j--;
    }
    displayArray(array, [], [i], []);
    await sleep(speed);
  }

  // Display final state of the array after sorting
  displayArray(array);
}

export { insertionSort };
