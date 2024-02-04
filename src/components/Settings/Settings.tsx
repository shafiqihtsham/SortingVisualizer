import { useContext, useEffect, useState } from "react";
import GraphsContext from "../../context/GraphsContext";
import { changeSettings } from "../../utils/modifySettings";

const Settings = () => {
  const { graphSettings, setGraphSettings } = useContext(GraphsContext);
  let shuffleDisabled = false;

  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>(
    graphSettings.algorithm
  );

  // Function to handle changes in the select dropdown
  const handleAlgorithmChange = (event) => {
    changeSettings(graphSettings, setGraphSettings, {
      algorithm: `${event.target.value}`,
    });
    setSelectedAlgorithm(event.target.value);
  };

  useEffect(() => {
    if (graphSettings.sort) {
      shuffleDisabled = true;
    }
  }, [graphSettings]);

  const handleNewArray = () => {
    changeSettings(graphSettings, setGraphSettings, {
      shuffle: true,
    });
  };

  const handleSort = () => {
    changeSettings(graphSettings, setGraphSettings, {
      sort: true,
    });
  };

  return (
    <div className="flex flex-wrap justify-evenly my-5 mb-10 w-full h-full">
      <button
        className="minecraft-btn sm:w-32 md:w-40 lg:w-64 text-center text-white truncate p-1 border-2 border-b-4 disabled:cursor-not-allowed"
        onClick={handleNewArray}
      >
        New
      </button>
      <select
        value={selectedAlgorithm}
        onChange={handleAlgorithmChange}
        defaultValue="test"
        className="minecraft-btn  sm:w-32 md:w-40 lg:w-64 text-center text-white truncate p-1 border-2 border-b-4"
      >
        <option value="test">Choose Algorithm</option>
        <option value="bubble">Bubble Sort</option>
        <option value="insertion">Insertion Sort</option>
        <option value="merge">Merge Sort</option>
        <option value="quicksort">Quicksort</option>
      </select>
      <button
        className="minecraft-btn sm:w-32 md:w-40 lg:w-64 text-center text-white truncate p-1 border-2 border-b-4"
        onClick={handleSort}
      >
        Sort
      </button>
    </div>
  );
};

export default Settings;
