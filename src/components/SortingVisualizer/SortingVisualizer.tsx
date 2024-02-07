import { useState, useEffect, useContext } from "react";
import { bubbleSort } from "../../SortingAlgorithms/BubbleSort";

const NUM_BARS = {
  small: 50,
  medium: 100,
  large: 200,
  user: 0,
};

const ARRAY_LIMIT = {
  min: 10,
  max: 315,
};

const SortingVisualizer = () => {
  const [numberArray, setNumberArray] = useState<number[]>([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>("bubble");
  const [speed, setSpeed] = useState<number>(50);
  const [sorting, setSorting] = useState<boolean>(false);
  const [shuffleDisabled, setShuffleDisabled] = useState<boolean>(false);
  const [sortDisabled, setSortDisabled] = useState<boolean>(false);
  

  useEffect(() => {
    setNumberArray(randomIntArray(ARRAY_LIMIT.min, ARRAY_LIMIT.max));
  }, []);

  useEffect(() => {
    showBars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberArray]);

  const handleAlgorithmChange = (event: any) => {
    setSelectedAlgorithm(event.target.value);
  };

  const handleSort = () => {
    setSorting(true);
    // need to run this function when sort is true and i need to disable shuffle and set it to false;
    const copy = [...numberArray];
    const swaps = bubbleSort(copy);
    animateBubbleSort(swaps);
  };

  const handleNewArray = () => {
    newArray();
  };

  const animateBubbleSort = (swaps: number[][]) => {
    setSortDisabled(true);
    setShuffleDisabled(true);
    if (swaps.length == 0) {
      showBars();
      setShuffleDisabled(false);
      setSortDisabled(false);
      setSorting(false);
      return;
    }
    const [i, j] = swaps.shift() ?? [0, 0];

    [numberArray[i], numberArray[j]] = [numberArray[j], numberArray[i]];
    showBars([i, j]);
    setTimeout(function () {
      animateBubbleSort(swaps);
    }, speed);
  };

  const newArray = () => {
    const newArray = randomIntArray(ARRAY_LIMIT.min, ARRAY_LIMIT.max);
    setNumberArray(newArray);
  };

  function showBars(indices?: number[]) {
    const container = document.getElementById("container");
    if (!container) return;

    container.innerHTML = "";

    for (let i = 0; i < numberArray.length; i++) {
      const bar = document.createElement("div");
      bar.style.height = `${numberArray[i]}px`;
      bar.style.width = "4px";
      bar.classList.add("bg-red-500");
      bar.classList.add("inline-block");
      bar.classList.add("mx-[1px]");
      bar.classList.add("bg-gradient-to-b");
      bar.classList.add("from-yellow-300");
      bar.classList.add("to-transparent");
      if (indices && indices.includes(i)) {
        bar.style.backgroundColor = "green";
      } else if (!indices) {
        bar.style.backgroundColor = "red";
      }
      container.appendChild(bar);
    }
  }

  const handleBarsChange = (event: any) => {
    const invertedValue = parseInt(event.target.value);
    setSpeed(100 - invertedValue);
  }
  return (
    <>
      <section>
        <div className="flex flex-wrap justify-evenly my-5 mb-10 w-full h-full">
          <button
            className="minecraft-btn sm:w-32 md:w-40 lg:w-64 text-center text-white truncate p-1 border-2 border-b-4 disabled:cursor-not-allowed disabled:text-gray-400"
            onClick={handleNewArray}
            disabled={shuffleDisabled}
          >
            New
          </button>
          <select
            value={selectedAlgorithm}
            onChange={handleAlgorithmChange}
            className="minecraft-btn  sm:w-32 md:w-40 lg:w-64 text-center text-white truncate p-1 border-2 border-b-4"
          >
            <option value="bubble">Bubble Sort</option>
            <option disabled={true} value="insertion">
              Insertion Sort
            </option>
            <option disabled={true} value="merge">
              Merge Sort
            </option>
            <option disabled={true} value="quicksort">
              Quicksort
            </option>
          </select>
          <button
            className="minecraft-btn sm:w-32 md:w-40 lg:w-64 text-center text-white truncate p-1 border-2 border-b-4 disabled:cursor-not-allowed disabled:text-gray-400"
            onClick={handleSort}
            disabled={sortDisabled}
          >
            Sort
          </button>
        </div>
      </section>
      <section>
        <div className="w-full flex justify-center">
          <div className="m-auto inline-block justify-center">
            <div
              className="max-w-full flex items-end select-none rounded-lg"
              id="container"
              style={{ height: `${ARRAY_LIMIT.max}px` }}
            ></div>
          </div>
        </div>
      </section>
      <section className="flex flex-row justify-center mt-8">
        <input
          type="range"
          id="slider"
          min={0}
          max={100}
          onChange={handleBarsChange}
          className=" absolute h-[40px] w-64 disabled:cursor-not-allowed disabled:text-gray-400"
        />
        <div className="relative bottom-[-8px] select-none">
          <label
            htmlFor="slider"
            className="font-[Minecraftia] text-white text-sm"
          >
            SPEED: {(speed - 100) * -1 === 100 ? "ULTRA FAST" : (speed - 100) * -1}
          </label>
        </div>
      </section>
    </>
  );
};

function randomIntArray(min: number, max: number): number[] {
  const array = [];
  for (let i = 0; i < NUM_BARS.small; i++) {
    array.push(Math.floor(Math.random() * (max - min + 1) + min));
  }

  return array;
}

export default SortingVisualizer;
