// Display array bars
export function displayArray(
  array: number[],
  comparisons: number[] = [],
  sorted: number[] = [],
  swapping: number[] = []
) {
  const arrayDiv = document.getElementById("container");
  arrayDiv!.innerHTML = "";
  array.forEach((num, index) => {
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.height = `${num}px`;
    if (comparisons.includes(index)) {
      bar.style.backgroundColor = "red"; // Color for comparisons
    } else if (sorted.includes(index)) {
      bar.style.backgroundColor = "green"; // Color for sorted elements
    } else if (swapping.includes(index)) {
      bar.style.backgroundColor = "yellow"; // Color for elements being swapped
    }
    arrayDiv!.appendChild(bar);
  });
}
