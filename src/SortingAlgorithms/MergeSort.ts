// function to generate array

// function to map over array and display it.
// changing colour depending if its comparison or swapping or sorted

// merge sort recursive algorithm

// mergesrt helper function

//function to start sorting

//function called sleep to delay execution, coould just use setTimeout instead

import { displayArray } from "../utils/displayArray";
import { sleep } from "../utils/sleep";

async function merge(
  array: number[],
  start: number,
  middle: number,
  end: number
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
    await sleep(100);
    k++;
  }

  while (i < leftArray.length) {
    array[k] = leftArray[i];
    displayArray(array, [], [], [k]);
    await sleep(500);
    i++;
    k++;
  }

  while (j < rightArray.length) {
    array[k] = rightArray[j];
    displayArray(array, [], [], [k]);
    await sleep(500);
    j++;
    k++;
  }
}

export async function mergeSort(
  arr: number[],
  start: number,
  end: number
): Promise<void> {
  if (start < end) {
    const mid = Math.floor((start + end) / 2);
    await mergeSort(arr, start, mid);
    await mergeSort(arr, mid + 1, end);
    await merge(arr, start, mid, end);
  }
}
