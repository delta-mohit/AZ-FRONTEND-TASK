import { GoInfo } from "react-icons/go";
import Tabbar from "./Tabbar";
import { Tooltip } from "react-tooltip";

function ContentHeader() {
  return (
    <>
      <div className="flex justify-center sm:justify-between items-center mx-[1px] sm:mx-8 mt-6">
        <Tabbar />
        <button className="hidden sm:flex justify-center items-center space-x-2 rounded-lg border border-[#a4e6ff] p-[7px] my-anchor-element ">
          <GoInfo />
          <span className="text-[#172B4D] text-sm font-DMSans font-bold ">
            How it works
          </span>
          <Tooltip
            anchorSelect=".my-anchor-element"
            content="Hi, AZ team. This is Mohit Saini from IIT Kharagpur."
          />
        </button>
      </div>
      <div className="bg-[#A4E6FF] h-[0.5px] mx-8 my-6 opacity-50" />
    </>
  );
}

export default ContentHeader;
