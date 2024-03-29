let memoizedSorted: number[] = [];

export function displayArray(
  array: number[],
  compared: number[] = [],
  sorted: number[] = [],
  swapped: number[] = []
) {
  const arrayDiv = document.getElementById("container");
  if (!arrayDiv) return;

  const bars = arrayDiv.querySelectorAll(".bar");

  array.forEach((num, index) => {
    const bar = bars[index] as HTMLElement; // Get the existing bar element

    // Update the height
    bar.style.height = `${num}px`;

    // Update the background color based on the state
    if (compared.includes(index)) {
      bar.style.backgroundColor = "green"; // Color for comparisons
    } else if (memoizedSorted.includes(index) || sorted.includes(index)) {
      bar.style.backgroundColor = "cyan"; // Color for sorted elements (memoized)
    } else if (swapped.includes(index)) {
      bar.style.backgroundColor = "red"; // Color for elements being swapped
    } else {
      bar.style.backgroundColor = ""; // Reset background color if none of the conditions are met
    }
  });

  // Update the memoized sorted array
  memoizedSorted = memoizedSorted.concat(sorted);
}

export function clearMemoized() {
  memoizedSorted = [];
}
