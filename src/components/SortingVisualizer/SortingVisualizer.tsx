import { useState, useEffect } from "react";
import { bubbleSort } from "../../SortingAlgorithms/BubbleSort";

const NUM_BARS = {
  small: 25,
  medium: 100,
  large: 200,
};

const ARRAY_LIMIT = {
  min: 1,
  max: 315,
};

const SortingVisualizer = () => {
  const [numberArray, setNumberArray] = useState<number[]>([]);
  const [sorted, setSorted] = useState<boolean>(false);

  useEffect(() => {
    setNumberArray(randomIntArray(ARRAY_LIMIT.min, ARRAY_LIMIT.max));
  }, []);

  useEffect(() => {
    showBars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberArray]);

  const handleSort = () => {
    const copy = [...numberArray];
    const swaps = bubbleSort(copy);
    animateBubbleSort(swaps);
  };

  const handleNewArray = () => {
    newArray();
  };

  const animateBubbleSort = (swaps: number[][]) => {
    if (swaps.length == 0) {
      showBars();
      return;
    }
    const [i, j] = swaps.shift() ?? [0, 0];

    [numberArray[i], numberArray[j]] = [numberArray[j], numberArray[i]];
    showBars([i, j]);
    setTimeout(function () {
      animateBubbleSort(swaps);
    }, 5);

    setSorted(true);
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
      bar.style.width = "3px";
      bar.classList.add("bg-red-500");
      bar.classList.add("inline-block");
      bar.classList.add("mx-[1px]");
      if (indices && indices.includes(i)) {
        setSorted(false);
        console.log(indices);
        bar.style.backgroundColor = "yellow";
      } else if (!indices && sorted === true) {
        bar.style.backgroundColor = "green";
      }
      container.appendChild(bar);
      setSorted(true);
    }
  }

  return (
    <div className="">
      <div className="pt-0 flex m-auto justify-center">
        <button onClick={handleSort}>Sort</button>
        <button onClick={handleNewArray} className="mx-10">
          New
        </button>
      </div>
      <div className="w-full">
        <div className="m-auto px-20 inline-block justify-center text">
          <div
            className="max-w-full flex items-end select-none bg-white rounded-lg px-4"
            id="container"
            style={{ height: `${ARRAY_LIMIT.max}px` }}
          ></div>
        </div>
      </div>
    </div>
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
