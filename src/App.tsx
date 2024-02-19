import Header from "./components/Header";
import SortingVisualizer from "./components/SortingVisualizer";

function App() {
  return (
    <main className="max-w-[1440p]">
      <Header />
      <section>
        <SortingVisualizer />
      </section>
    </main>
  );
}

export default App;
