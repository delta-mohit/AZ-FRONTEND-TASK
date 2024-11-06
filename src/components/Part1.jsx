import { WiTime4 } from "react-icons/wi";
import { SiBookmeter } from "react-icons/si";
import { FaRegCopy } from "react-icons/fa6";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

function Part1({ isOpen, toggleAccordion }) {
  return (
    <>
      <div className=" flex justify-between px-4 mt-4 font-DMSans">
        <div>
          <p className="text-[#17384D]">PART 1</p>
          <p className="font-black">Lorem Ipsum Dolor Sit Amet</p>
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
          <button onClick={toggleAccordion} className="focus:outline-none">
            {isOpen ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
          </button>
        </div>
      </div>

      <div className="flex justify-end px-4 mb-[6px]">
        <div className="rounded-lg border-[1px] border-[#a4e6ff] p-1 bg-[#EFF5FF]">
          <p className="text-black text-sm">45% Completed</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="flex">
        <div className="w-[45%] bg-[#172B4D] h-[6px] rounded-bl-2xl"></div>
        <div className="w-[55%] bg-[#EFF5FF] h-[6px] rounded-br-2xl"></div>
      </div>
    </>
  );
}

export default Part1;
