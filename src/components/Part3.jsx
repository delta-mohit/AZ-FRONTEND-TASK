import { WiTime4 } from "react-icons/wi";
import { SiBookmeter } from "react-icons/si";
import { FaRegCopy } from "react-icons/fa6";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Part3({ isOpen, toggleAccordion }) {
  return (
    <>
      <div
        className="flex justify-between px-4 mt-4 hover:cursor-pointer"
        onClick={toggleAccordion}
      >
        <div>
          <p className="text-[#17384D]">PART 3</p>
          <p className="font-bold">Graph Algoithms</p>
        </div>
        <div className="flex items-center justify-between basis-[45%] text-[#17384D]">
          <div className="flex justify-center items-center space-x-[5px]">
            <WiTime4 size={25} />
            <p>02:00:00</p>
          </div>
          <div className="flex justify-center items-center space-x-[5px]">
            <SiBookmeter size={19} />
            <p>Medium</p>
          </div>
          <div className="flex justify-center items-center space-x-[5px]">
            <FaRegCopy size={20} />
            <p>5</p>
          </div>
          <div className="focus:outline-none">
            {isOpen ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
          </div>
        </div>
      </div>

      <div className="flex justify-end px-4 my-[6px]">
        <div className="rounded-lg border-[1px] border-[#a4e6ff] p-1 bg-[#EFF5FF]">
          <p className="text-black text-sm">0% Completed</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="flex">
        <div className="w-full bg-[#EFF5FF] h-[6px] rounded-b-2xl"></div>
      </div>
    </>
  );
}

export default Part3;
