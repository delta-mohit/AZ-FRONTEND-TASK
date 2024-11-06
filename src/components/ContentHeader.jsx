import { GoInfo } from "react-icons/go";
import Tabbar from "./Tabbar";

function ContentHeader() {
  return (
    <>
      <div className="flex justify-between items-center mx-8 mt-6">
        <Tabbar />
        <button className="flex justify-center items-center space-x-2 rounded-lg border border-[#a4e6ff] p-[7px]">
          <GoInfo />
          <span className="text-[#172B4D] text-sm font-DMSans font-bold">
            How it works
          </span>
        </button>
      </div>
      <div className="bg-[#A4E6FF] h-[0.5px] mx-8 my-6 opacity-50" />
    </>
  );
}

export default ContentHeader;
