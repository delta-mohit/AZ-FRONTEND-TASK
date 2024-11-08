import Content from "./Content";
import Sidebar from "./Sidebar";

function MainContent() {
  return (
    <>
      <div className="flex mt-4">
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

export default MainContent;
