import { displayArray } from "../utils/displayMergeSort";
import { sleep } from "../utils/sleep";

async function merge(
  array: number[],
  start: number,
  middle: number,
  end: number,
  speed: number
): Promise<void> {
  const leftArray: number[] = array.slice(start, middle + 1);
  const rightArray: number[] = array.slice(middle + 1, end + 1);

  let i: number = 0,
    j: number = 0,
    k: number = start;

  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] <= rightArray[j]) {

      array[k] = leftArray[i];
      i++;
    } else {
      array[k] = rightArray[j];
      j++;
    }
    displayArray(array, [start + i, middle + 1 + j], [], [k]);
    await sleep(speed);
    k++;
  }

  while (i < leftArray.length) {
    array[k] = leftArray[i];
    displayArray(array, [], [], [k]);
    await sleep(speed);
    i++;
    k++;
  }

  while (j < rightArray.length) {
    array[k] = rightArray[j];
    displayArray(array, [], [], [k]);
    await sleep(speed);
    j++;
    k++;
  }
}

export async function mergeSort(
  arr: number[],
  start: number,
  end: number,
  speed?: number
): Promise<void> {
  speed = speed === 100 ? (speed += 400) : (speed! += 0);

  if (start < end) {
    const mid = Math.floor((start + end) / 2);
    await mergeSort(arr, start, mid, speed);
    await mergeSort(arr, mid + 1, end, speed);
    await merge(arr, start, mid, end, speed!);
  }
}
