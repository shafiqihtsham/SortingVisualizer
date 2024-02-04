import { useState, useEffect, useContext } from "react";
import { bubbleSort } from "../../SortingAlgorithms/BubbleSort";
import GraphsContext from "../../context/GraphsContext";
import { changeSettings } from "../../utils/modifySettings";
import Settings from "../Settings";

const NUM_BARS = {
  small: 50,
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
  const [speed, setSpeed] = useState<number>(5);
  const { graphSettings, setGraphSettings } = useContext(GraphsContext);

  useEffect(() => {
    setNumberArray(randomIntArray(ARRAY_LIMIT.min, ARRAY_LIMIT.max));
  }, []);

  useEffect(() => {
    showBars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberArray]);

  useEffect(() => {
    if (graphSettings.shuffle === true && graphSettings.sort === false) {
      handleNewArray();
    }

    if (graphSettings.shuffle === false && graphSettings.sort === true) {
      handleSort();
    }
  }, [graphSettings.shuffle, graphSettings.sort]);

  const handleSort = () => {
    const copy = [...numberArray];
    const swaps = bubbleSort(copy);
    animateBubbleSort(swaps);
    changeSettings(graphSettings, setGraphSettings, {
      sort: true,
      shuffle:false,
    });
  };

  const handleNewArray = () => {
    newArray();
    changeSettings(graphSettings, setGraphSettings, {
      shuffle: true,
      sort:false,
    });
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
    }, speed);

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
      bar.classList.add("m-0");
      bar.classList.add("bg-gradient-to-t");
      bar.classList.add("from-yellow-300");
      bar.classList.add("to-transparent");
      if (indices && indices.includes(i)) {
        setSorted(false);
        bar.style.backgroundColor = "yellow";
      } else if (!indices && sorted === true) {
        bar.style.backgroundColor = "green";
      }
      container.appendChild(bar);
      setSorted(true);
    }
  }

  return (
    <>
      <section>
        <Settings />
      </section>
      <section>
        <div className="w-full flex justify-center">
          <div className="m-auto px-20 inline-block justify-center">
            <div
              className="max-w-full flex items-end select-none rounded-lg px-4"
              id="container"
              style={{ height: `${ARRAY_LIMIT.max}px` }}
            ></div>
          </div>
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
