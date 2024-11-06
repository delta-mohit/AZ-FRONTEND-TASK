import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import Lesson from "./Lesson";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { IoCodeSlashOutline } from "react-icons/io5";
import { FiPlayCircle } from "react-icons/fi";
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";

const items = [
  { title: "DP Intro", icon: <FiPlayCircle size={19} /> },
  { title: "DP Article", icon: <RxQuestionMarkCircled size={19} /> },
  { title: "Quiz", icon: <RxQuestionMarkCircled size={19} /> },
  { title: "Coding Problem", icon: <IoCodeSlashOutline size={19} /> },
  { title: "Combined Resource", icon: <FaRegCopy size={19} /> },
];

function ContentMain() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="ml-4 flex flex-col space-y-5 w-full mb-8">
      <div className="rounded-lg border-[1px] border-[#a4e6ff]">
        <Part1 isOpen={isOpen} toggleAccordion={toggleAccordion} />
        {isOpen && (
          <div>
            {" "}
            {items.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <Lesson item={item} />
                  {index < items.length - 1 && (
                    <div className="h-[2px] bg-gradient-to-r from-white via-gray-200 via-50% to-white"></div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        )}
      </div>
      <div className="rounded-lg border-[1px] border-[#a4e6ff]">
        <Part2 />
      </div>
      <div className="rounded-lg border-[1px] border-[#a4e6ff]">
        <Part3 />
      </div>
    </div>
  );
}

export default ContentMain;
