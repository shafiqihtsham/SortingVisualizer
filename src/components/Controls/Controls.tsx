interface ControlsProps {
    shuffleDisabled: boolean;
    sortDisabled: boolean;
    selectedAlgorithm: string;
    handleNewArray: () => void;
    handleAlgorithmChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    handleSort: () => void;
}

const Controls = (props:ControlsProps) => {
    return (
        <div className="flex flex-wrap justify-center my-5 mb-10 w-full h-full gap-2">
          <button
            className="minecraft-btn sm:w-32 md:w-40 lg:w-64 text-center text-white truncate p-1 border-2 border-b-4 disabled:cursor-not-allowed disabled:text-gray-400"
            onClick={props.handleNewArray}
            disabled={props.shuffleDisabled}
          >
            New
          </button>
          <select
            value={props.selectedAlgorithm}
            onChange={props.handleAlgorithmChange}
            className="minecraft-btn  sm:w-32 md:w-40 lg:w-64 text-center text-white truncate p-1 border-2 border-b-4 [&>option]:bg-slate-500"
          >
            <option value="bubble">Bubble Sort</option>
            <option value="insertion">
              Insertion Sort
            </option>
            <option value="merge">
              Merge Sort
            </option>
            <option value="quick">
              Quicksort
            </option>
            <option value="heap">
              Heapsort
            </option>
          </select>
          <button
            className="minecraft-btn sm:w-32 md:w-40 lg:w-64 text-center text-white truncate p-1 border-2 border-b-4 disabled:cursor-not-allowed disabled:text-gray-400"
            onClick={props.handleSort}
            disabled={props.sortDisabled}
          >
            Sort
          </button>
        </div>
    )
}

export default Controls;