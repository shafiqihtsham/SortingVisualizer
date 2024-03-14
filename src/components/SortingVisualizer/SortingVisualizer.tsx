import { useState, useEffect } from "react";
import Slider from "../Slider/Slider";
import Controls from "../Controls/Controls";
import { bubbleSort } from "../../SortingAlgorithms/BubbleSort";
import { insertionSort } from "../../SortingAlgorithms/InsertionSort";
import { mergeSort } from "../../SortingAlgorithms/MergeSort";

const ARRAY_LIMIT = {
  min: 10,
  max: 315,
  length: 50,
};

const SortingVisualizer = () => {
  const [numberArray, setNumberArray] = useState(() =>
    randomIntArray(ARRAY_LIMIT.min, ARRAY_LIMIT.max, ARRAY_LIMIT.length)
  );
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>("bubble");
  const [speed, setSpeed] = useState<number>(50);
  const [shuffleDisabled, setShuffleDisabled] = useState<boolean>(false);
  const [sortDisabled, setSortDisabled] = useState<boolean>(false);
  const [bars, setBars] = useState<number>(10);

  const handleAlgorithmChange = (event: any) => {
    setSelectedAlgorithm(event.target.value);
  };

  const handleSort = async () => {
    // need to run this function when sort is true and i need to disable shuffle and set it to false;
    const copy = [...numberArray];

    switch (selectedAlgorithm) {
      case "bubble":
        await bubbleSort(copy);
        break;
      case "insertion":
        await insertionSort(copy);
        break;
      case "merge":
        await mergeSort(copy, 0, copy.length - 1);
        break;
    }
  };

  const handleNewArray = () => {
    newArray();
  };

  const animateBubbleSort = (swaps: number[][]) => {
    setSortDisabled(true);
    setShuffleDisabled(true);
    if (swaps.length == 0) {
      setShuffleDisabled(false);
      setSortDisabled(false);
      return;
    }
    const [i, j] = swaps.shift() ?? [0, 0];

    [numberArray[i], numberArray[j]] = [numberArray[j], numberArray[i]];
    setTimeout(function () {
      animateBubbleSort(swaps);
    }, speed);
  };

  const newArray = () => {
    const newArray = randomIntArray(ARRAY_LIMIT.min, ARRAY_LIMIT.max, bars);
    setNumberArray(newArray);
  };

  const handleSpeedChange = (event: any) => {
    const invertedValue = parseInt(event.target.value);
    setSpeed(100 - invertedValue);
  };

  const handleBarsChange = () => {
    let newBars;

    if (bars >= 150) {
      newBars = 50;
    } else {
      newBars = bars + 50;
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
          handleNewArray={handleNewArray}
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
              className="max-w-full flex items-end select-none border"
              id="container"
              style={{ height: `${ARRAY_LIMIT.max}px` }}
            >
              {numberArray.map((num, i) => (
                <div
                  key={i}
                  style={{ height: `${num - 2}px` }}
                  className="inline-block w-[20px] mr-[1px] bg-blue-500 bar"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-6 items-center mb-5">
        <button
          className="hidden sm:block minecraft-btn sm:w-32 md:w-40 lg:w-64 text-center text-white truncate p-1 border-2 border-b-4 disabled:cursor-not-allowed disabled:text-gray-400"
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
