import { displayQuickSort } from "../utils/displayAlgorithm"; // Assuming you have a utility function to display array
import { sleep } from "../utils/sleep";

async function partition(
  array: number[],
  low: number,
  high: number,
  speed: number
): Promise<number> {
  const pivot = array[high];
  displayQuickSort(array, [], [], [], [high]);
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (array[j] < pivot) {
      i++;
      displayQuickSort(array, [i, j], [], [], [high]);
      await sleep(speed);
      [array[i], array[j]] = [array[j], array[i]]; // Swap array[i] and array[j]
      displayQuickSort(array, [], [], [i, j], [high]);
      await sleep(speed);
      displayQuickSort(array, [], [i], [], [high]);
      await sleep(speed);
    }
  }

  [array[i + 1], array[high]] = [array[high], array[i + 1]]; // Swap array[i+1] and pivot
  displayQuickSort(array, [], [], [i + 1], [high]);
  await sleep(speed);
  displayQuickSort(array, [], [i + 1], [], []);
  await sleep(speed);
  displayQuickSort(array, [], [high], [], []);
  await sleep(speed);
  return i + 1;
}

export async function quickSort(
  array: number[],
  low: number,
  high: number,
  speed?: number
): Promise<void> {
  speed = speed === 100 ? (speed += 400) : (speed! += 0);

  if (low < high) {
    const pi = await partition(array, low, high, speed);
    await quickSort(array, low, pi - 1, speed);
    await quickSort(array, pi + 1, high, speed);
  }
}
