import Content from "./Content";
import Header from "./Header";

function MainContent() {
  return (
    <>
      <div className="flex-1 p-8">
        <Header />
        <Content />
      </div>
    </>
  );
}

export default MainContent;
