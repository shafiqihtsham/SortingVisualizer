import { displayHeapSort } from "../utils/displayAlgorithm";
import { sleep } from "../utils/sleep";

async function heapify(
  array: number[],
  n: number,
  i: number,
  speed: number
): Promise<void> {
  let largest = i;
  const left = 2 * i + 1; // left index in max heap
  const right = 2 * i + 2; // right index in max heap

  if (left < n && array[left] > array[largest]) {
    largest = left; 
  }

  if (right < n && array[right] > array[largest]) {
    largest = right; 
  }

  if (largest !== i) {
    [array[i], array[largest]] = [array[largest], array[i]]; // Swap array[i] and array[largest]
    displayHeapSort(array, [], [], [i, largest]);
    await sleep(speed);
    await heapify(array, n, largest, speed);
  }
}

export async function heapSort(array: number[], speed?: number): Promise<void> {
  speed = speed === 100 ? (speed += 400) : (speed! += 0);

  const n = array.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await heapify(array, n, i, speed);
  }

  // Heap sort
  for (let i = n - 1; i > 0; i--) {
    [array[0], array[i]] = [array[i], array[0]]; // Swap array[0] and array[i]
    displayHeapSort(array, [], [], [0, i]);
    await sleep(speed);
    displayHeapSort(array, [], [i]);
    await sleep(speed);
    await heapify(array, i, 0, speed);
  }
  displayHeapSort(array, [], [0]);
  await sleep(speed);
}
