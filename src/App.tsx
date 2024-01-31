import Header from "./components/Header";
import SortingVisualizer from "./components/SortingVisualizer";

function App() {
  return (
    <>
      <div>
        <Header />
        <section className=" w-full h-full pt-96 ">
          <div className="flex justify-center"><SortingVisualizer/></div>
        </section>
      </div>
    </>
  );
}

export default App;
