import { displayArray } from "../utils/displayArray";
import { sleep } from "../utils/sleep";

async function bubbleSort(array: number[]): Promise<void> {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        displayArray(array, [j, j + 1], [], []);
          
        await sleep(500);
        displayArray(array, [], [], [j, j + 1]);
        await sleep(500)
        const temp: number = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
    // Display the state of the array after each pass
    displayArray(array, [], [], []);
    await sleep(100); // Delay between each pass
  }
  displayArray(array); // Display final state of the array after sorting
}

export { bubbleSort };
