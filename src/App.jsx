import MainContent from "./components/MainContent";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="flex flex-col px-[4px] sm:px-12 pt-8 min-w-[520px]">
        <Header />
        <MainContent />
      </div>
    </>
  );
}

export default App;
