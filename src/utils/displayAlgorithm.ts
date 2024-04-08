let memoizedSorted: number[] = [];

export function displayBubbleSort(
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
      bar.style.backgroundImage =
        "linear-gradient(to bottom, #facc15, #f87171)"; // Color for sorted elements (memoized)
    } else if (swapped.includes(index)) {
      bar.style.backgroundColor = "red"; // Color for elements being swapped
    } else {
      bar.style.backgroundColor = ""; // Reset background color if none of the conditions are met
      bar.style.backgroundImage = "";
    }
  });

  // Update the memoized sorted array
  memoizedSorted = memoizedSorted.concat(sorted);
}

export function displayHeapSort(
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
      bar.style.backgroundImage = "linear-gradient(to bottom, green, green)"; // Color for comparisons
    } else if (memoizedSorted.includes(index) || sorted.includes(index)) {
      bar.style.backgroundImage =
        "linear-gradient(to bottom, #facc15, #f87171)"; // Color for sorted elements (memoized)
    } else if (swapped.includes(index)) {
      bar.style.backgroundImage = "linear-gradient(to bottom, red, red)"; // Color for elements being swapped
    } else {
      bar.style.backgroundImage = ""; // Reset background color if none of the conditions are met
    }
  });

  // Update the memoized sorted array
  memoizedSorted = memoizedSorted.concat(sorted);
}

export function displayInsertionSort(
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
      bar.style.backgroundImage = "linear-gradient(to bottom, green, green)"; // Color for comparisons
    } else if (memoizedSorted.includes(index) && !swapped.includes(index)) {
      bar.style.backgroundImage =
        "linear-gradient(to bottom, #facc15, #f87171)"; // Color for sorted elements
      sorted.push(index); // Update memoized sorted array
    } else if (swapped.includes(index)) {
      bar.style.backgroundImage = "linear-gradient(to bottom, red, red)"; // Color for elements being swapped
    } else {
      bar.style.backgroundImage = ""; // Reset background color if none of the conditions are met
      
    }
  });

  // Update the memoized sorted array
  memoizedSorted = memoizedSorted.concat(sorted);
}

export function displayMergeSort(
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
      bar.style.backgroundImage = "linear-gradient(to bottom, green, green)";
    } else if (memoizedSorted.includes(index)) {
      bar.style.backgroundImage =
        "linear-gradient(to bottom, #facc15, #f87171)"; // Color for sorted elements (memoized)
    } else if (swapped.includes(index)) {
      bar.style.backgroundImage = "linear-gradient(to bottom, red, red)";
      // Color for elements being swapped
    } else {
      bar.style.backgroundImage = "";
    }
  });

  // Update the memoized sorted array
  memoizedSorted = memoizedSorted.concat(sorted);
}

export function displayQuickSort(
  array: number[],
  compared: number[] = [],
  sorted: number[] = [],
  swapped: number[] = [],
  pivot: number[] = []
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
      bar.style.backgroundImage = "linear-gradient(to bottom, green, green)";
    } else if (memoizedSorted.includes(index) && !pivot.includes(index)) {
      bar.style.backgroundImage =
        "linear-gradient(to bottom, #facc15, #f87171)"; // Color for sorted elements (memoized)
    } else if (swapped.includes(index)) {
      bar.style.backgroundImage = "linear-gradient(to bottom, red, red)";
    } else if (pivot.includes(index)) {
      bar.style.backgroundImage = "linear-gradient(to bottom, purple, purple)";
      // Color for sorted elements (memoized)
    } else {
      bar.style.backgroundImage = ""; // Reset background color if none of the conditions are met
      
    }
  });

  // Update the memoized arrays
  memoizedSorted = memoizedSorted.concat(sorted);
}

export function clearMemoized() {
  memoizedSorted = [];
}
