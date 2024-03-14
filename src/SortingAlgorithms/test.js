// Generate random array of numbers
function generateArray(length, min, max) {
    return Array.from({length: length}, () => Math.floor(Math.random() * (max - min + 1)) + min);
}

// Display array bars
function displayArray(array, comparisons = [], sorted = [], swapping = []) {
    const arrayDiv = document.getElementById('array');
    arrayDiv.innerHTML = '';
    array.forEach((num, index) => {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = `${num}px`;
        if (comparisons.includes(index)) {
            bar.style.backgroundColor = 'red'; // Color for comparisons
        } else if (sorted.includes(index)) {
            bar.style.backgroundColor = 'green'; // Color for sorted elements
        } else if (swapping.includes(index)) {
            bar.style.backgroundColor = 'yellow'; // Color for elements being swapped
        }
        arrayDiv.appendChild(bar);
    });
}

// Merge Sort algorithm
async function mergeSort(array, start, end) {
    if (start < end) {
        const middle = Math.floor((start + end) / 2);
        await mergeSort(array, start, middle);
        await mergeSort(array, middle + 1, end);
        await merge(array, start, middle, end);
    }
}

// Merge helper function
async function merge(array, start, middle, end) {
    const leftArray = array.slice(start, middle + 1);
    const rightArray = array.slice(middle + 1, end + 1);
    let i = 0, j = 0, k = start;
    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] <= rightArray[j]) {
            array[k] = leftArray[i];
            i++;
        } else {
            array[k] = rightArray[j];
            j++;
        }
        displayArray(array, [start + i, middle + 1 + j], [], [k]);
        await sleep(500); // Delay for visualization
        k++;
    }
    while (i < leftArray.length) {
        array[k] = leftArray[i];
        displayArray(array, [], [], [k]);
        await sleep(500); // Delay for visualization
        i++;
        k++;
    }
    while (j < rightArray.length) {
        array[k] = rightArray[j];
        displayArray(array, [], [], [k]);
        await sleep(500); // Delay for visualization
        j++;
        k++;
    }
}

// Visualize merge sort
async function startSorting() {
    const array = generateArray(10, 20, 200); // Change parameters as needed
    displayArray(array);
    await sleep(1000); // Delay for visualization
    await mergeSort(array, 0, array.length - 1);
}

// Helper function for delay
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
