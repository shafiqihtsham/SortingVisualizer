import { displayBubbleSort } from "../utils/displayAlgorithm";
import { sleep } from "../utils/sleep";

async function bubbleSort(array: number[], speed: number): Promise<void> {
  speed = speed === 100 ? (speed += 400) : (speed += 0);

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      // Highlight all elements being compared
      displayBubbleSort(array, [j, j + 1], [], []);

      await sleep(speed);

      if (array[j] > array[j + 1]) {
        displayBubbleSort(array, [j, j + 1], [], []);
        await sleep(speed);
        const temp: number = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        displayBubbleSort(array, [], [], [j, j + 1]);
        await sleep(speed);
      }
    }
    displayBubbleSort(array, [], [array.length - i - 1], []);
    // Display the state of the array after each pass
  }
  displayBubbleSort(array); // Display final state of the array after sorting
}

export { bubbleSort };
