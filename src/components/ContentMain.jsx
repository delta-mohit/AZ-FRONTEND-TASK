import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import Lesson from "./Lesson";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { IoCodeSlashOutline } from "react-icons/io5";
import { FiPlayCircle } from "react-icons/fi";
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";

const items1 = [
  { title: "DP Intro", icon: <FiPlayCircle size={19} /> },
  { title: "DP Article", icon: <RxQuestionMarkCircled size={19} /> },
  { title: "Quiz", icon: <RxQuestionMarkCircled size={19} /> },
  { title: "Coding Problem", icon: <IoCodeSlashOutline size={19} /> },
  { title: "Combined Resource", icon: <FaRegCopy size={19} /> },
];

const items2 = [
  { title: "Tree Advanced", icon: <FiPlayCircle size={19} /> },
  { title: "Tree Article", icon: <RxQuestionMarkCircled size={19} /> },
  { title: "Coding Problem", icon: <IoCodeSlashOutline size={19} /> },
];

const items3 = [
  { title: "Graph Basics", icon: <FiPlayCircle size={19} /> },
  { title: "Resources", icon: <FaRegCopy size={19} /> },
];

function ContentMain() {
  const [isOpenPart1, setIsOpenPart1] = useState(false);
  const [isOpenPart2, setIsOpenPart2] = useState(false);
  const [isOpenPart3, setIsOpenPart3] = useState(false);

  const togglePart1 = () => setIsOpenPart1(!isOpenPart1);
  const togglePart2 = () => setIsOpenPart2(!isOpenPart2);
  const togglePart3 = () => setIsOpenPart3(!isOpenPart3);

  return (
    <div className="ml-4 flex flex-col space-y-5 w-full mb-8">
      <div className="rounded-lg border-[1px] border-[#a4e6ff]">
        <Part1 isOpen={isOpenPart1} toggleAccordion={togglePart1} />
        {isOpenPart1 && (
          <div>
            {items1.map((item, index) => (
              <React.Fragment key={index}>
                <Lesson item={item} />
                {index < items1.length - 1 && (
                  <div className="h-[2px] bg-gradient-to-r from-white via-gray-200 via-50% to-white"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>

      <div className="rounded-lg border-[1px] border-[#a4e6ff]">
        <Part2 isOpen={isOpenPart2} toggleAccordion={togglePart2} />
        {isOpenPart2 && (
          <div>
            {items2.map((item, index) => (
              <React.Fragment key={index}>
                <Lesson item={item} />
                {index < items2.length - 1 && (
                  <div className="h-[2px] bg-gradient-to-r from-white via-gray-200 via-50% to-white"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>

      <div className="rounded-lg border-[1px] border-[#a4e6ff]">
        <Part3 isOpen={isOpenPart3} toggleAccordion={togglePart3} />
        {isOpenPart3 && (
          <div>
            {items3.map((item, index) => (
              <React.Fragment key={index}>
                <Lesson item={item} />
                {index < items3.length - 1 && (
                  <div className="h-[2px] bg-gradient-to-r from-white via-gray-200 via-50% to-white"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ContentMain;
