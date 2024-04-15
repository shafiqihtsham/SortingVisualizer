import { useState } from "react";
import { bubbleSort } from "../../SortingAlgorithms/BubbleSort";
import { insertionSort } from "../../SortingAlgorithms/InsertionSort";
import { mergeSort } from "../../SortingAlgorithms/MergeSort";
import { quickSort } from "../../SortingAlgorithms/QuickSort";
import { heapSort } from "../../SortingAlgorithms/HeapSort";
import { clearMemoized } from "../../utils/displayAlgorithm";
import Slider from "../Slider";
import Controls from "../Controls";
import sound from "/click.mp4";

const ARRAY_LIMIT = {
  min: 10,
  max: 315,
  length: 50,
};

const SortingVisualizer = () => {
  const [numberArray, setNumberArray] = useState(() =>
    randomIntArray(ARRAY_LIMIT.min, ARRAY_LIMIT.max, ARRAY_LIMIT.length)
  );
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>("merge");
  const [speed, setSpeed] = useState<number>(50);
  const [shuffleDisabled, setShuffleDisabled] = useState<boolean>(false);
  const [sortDisabled, setSortDisabled] = useState<boolean>(false);
  const [bars, setBars] = useState<number>(50);

  function play() {
    new Audio(sound).play();
  }

  const handleAlgorithmChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    play();
    setSelectedAlgorithm(event.target.value);
  };

  const handleSort = async () => {
    play();
    const copy = [...numberArray];

    setShuffleDisabled(true);
    setSortDisabled(true);
    clearMemoized();

    switch (selectedAlgorithm) {
      case "bubble":
        await bubbleSort(copy, speed);
        break;
      case "insertion":
        await insertionSort(copy, speed);
        break;
      case "merge":
        await mergeSort(copy, 0, copy.length - 1, speed);
        break;
      case "quick":
        await quickSort(copy, 0, copy.length - 1, speed);
        break;
      case "heap":
        await heapSort(copy, speed);
        break;
    }
    setShuffleDisabled(false);
    setSortDisabled(false);
  };

  const newArray = () => {
    play();
    const arrayDiv = document.getElementById("container");
    if (!arrayDiv) return;

    const arrayBars = arrayDiv.querySelectorAll<HTMLDivElement>(".bar");

    for (let i = 0; i < arrayBars.length; i++) {
      arrayBars[i].style.backgroundColor = "";
      arrayBars[i].style.backgroundImage = "";
    }

    const newArray = randomIntArray(ARRAY_LIMIT.min, ARRAY_LIMIT.max, bars);
    setNumberArray(newArray);
    clearMemoized();
  };

  const handleSpeedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const invertedValue = parseInt(event.target.value);
    setSpeed(100 - invertedValue);
  };

  const handleBarsChange = () => {
    play();
    let newBars;

    if (bars >= 150) {
      newBars = 50;
    } else {
      newBars = bars + 50;
    }

    const arrayDiv = document.getElementById("container");
    if (!arrayDiv) return;

    const arrayBars = arrayDiv.querySelectorAll<HTMLDivElement>(".bar");

    for (let i = 0; i < arrayBars.length; i++) {
      arrayBars[i].style.backgroundColor = "";
      arrayBars[i].style.backgroundImage = "";
    }

    const newArray = randomIntArray(ARRAY_LIMIT.min, ARRAY_LIMIT.max, newBars);

    setBars(newBars);
    setNumberArray(newArray);
  };

  function randomIntArray(min: number, max: number, bars: number): number[] {
    const array = [];
    for (let i = 0; i < bars; i++) {
      array.push(Math.floor(Math.random() * (max - min + 1) + min));
    }

    return array;
  }

  return (
    <>
      <section>
        <Controls
          handleAlgorithmChange={handleAlgorithmChange}
          handleNewArray={newArray}
          handleSort={handleSort}
          selectedAlgorithm={selectedAlgorithm}
          shuffleDisabled={shuffleDisabled}
          sortDisabled={sortDisabled}
        />
      </section>
      <section>
        <div className="w-full flex justify-center mb-8">
          <div className="m-auto inline-block justify-center">
            <div
              className="flex flex-row items-end"
              id="container"
              style={{
                height: `${ARRAY_LIMIT.max}px`,
              }} // here
            >
              {numberArray.map((num, i) => (
                <div
                  key={i}
                  style={{ height: `${num - 2}px` }}
                  className="inline-block w-[3px] mr-[1px] bg-blue-500 bar"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-6 items-center mb-5">
        <button
          className="hidden sm:block w-[16rem] minecraft-btn lg:w-64 text-center text-white truncate p-1 border-2 border-b-4 disabled:cursor-not-allowed disabled:text-gray-400"
          onClick={handleBarsChange}
          disabled={shuffleDisabled}
        >
          Bars: {bars}
        </button>
        <div className="col-span-1">
          <Slider handleSpeedChange={handleSpeedChange} speed={speed} />
        </div>
      </section>
    </>
  );
};

export default SortingVisualizer;
