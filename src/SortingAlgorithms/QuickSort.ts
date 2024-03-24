import { displayArray } from "../utils/displayQuickSort"; // Assuming you have a utility function to display array
import { sleep } from "../utils/sleep";

async function partition(
  array: number[],
  low: number,
  high: number,
  speed: number
): Promise<number> {
  const pivot = array[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (array[j] < pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]]; // Swap array[i] and array[j]
      displayArray(array, [], [j], [i]);
      await sleep(speed);
    }
  }

  [array[i + 1], array[high]] = [array[high], array[i + 1]]; // Swap array[i+1] and pivot
  displayArray(array, [], [], [i + 1]);
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
