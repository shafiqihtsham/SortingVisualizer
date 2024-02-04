import { useState } from "react";
import Header from "./components/Header";
import SortingVisualizer from "./components/SortingVisualizer";
import GraphsContext from "./context/GraphsContext";

function App() {
  const [graphSettings, setGraphSettings] = useState({
    algorithm: "bubble",
    numBars: 25,
    speed: 5,
    sort: false,
    shuffle: false,
  });

  const value = { graphSettings, setGraphSettings };

  return (
    <>
      <GraphsContext.Provider value={value}>
        <main>
          <Header />
          <section>
            <SortingVisualizer />
          </section>
        </main>
      </GraphsContext.Provider>
    </>
  );
}

export default App;
