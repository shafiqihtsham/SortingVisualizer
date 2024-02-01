import Header from "./components/Header";
import SortingVisualizer from "./components/SortingVisualizer";

function App() {
  return (
    <>
      <div className="">
        <Header />
        <section className=" w-full h-full pt-4 ">
          <h1 className="text-xl p-4 my-4">Bubble Sort</h1>
          <div><SortingVisualizer/></div>
        </section>
      </div>
    </>
  );
}

export default App;
