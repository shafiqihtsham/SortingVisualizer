import { createContext } from "react";

interface newSettings {
  algorithm: string;
  numBars: number;
  speed: number;
  sort: boolean;
  shuffle: boolean;
}

interface GraphsContextType {
  graphSettings: newSettings;
  setGraphSettings: (newSettings: newSettings) => void;
}

const GraphsContext = createContext<GraphsContextType>({
  graphSettings: {
    algorithm: "",
    numBars: 25,
    speed: 5,
    sort: false,
    shuffle: false,
  },
  setGraphSettings: (newSettings: newSettings) => {},
});

export default GraphsContext;
