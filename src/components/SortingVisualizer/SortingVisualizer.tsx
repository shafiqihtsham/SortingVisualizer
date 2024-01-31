import { useState, useEffect } from "react";


const NUM_BARS = {
    small: 100,
    medium: 200,
    large: 300,
}

const SortingVisualizer = () => {
  const [numberArray, setNumberArray] = useState<number[]>([]);

  //   const generateArray = () => {
  //     randomIntArray(1, 100);
  //     setNumberArray(numberArray);
  //   };

  useEffect(() => {
    setNumberArray(randomIntArray(1, 315));
  }, []);

  return (
    <div className="m-auto px-20 inline-block justify-center text">
    <div className="max-w-full flex items-end">
      {numberArray.map((value, idx) => {
        return (
          <div
            key={idx}
            className="w-[3px] inline-block mx-0 bg-green-500 text-transparent"
            style={{ height: `${value}px` }}
          >
            {value}
          </div>
        );
      })}
    </div>
    </div>
  );
};

function randomIntArray(min: number, max: number): number[] {
  let array = [];
  for (let i = 0; i < 350; i++) {
    array.push(Math.floor(Math.random() * (max - min + 1) + min));
  }

  return array;
}

export default SortingVisualizer;
