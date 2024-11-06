import { useState } from "react";
import { WiTime4 } from "react-icons/wi";

function ContentSide({ className }) {
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    { title: "Chapter 1", time: "05:00:00" },
    { title: "Chapter 2", time: "03:30:00" },
    { title: "Chapter 3", time: "04:15:00" },
    { title: "Chapter 4", time: "02:20:00" },
    { title: "Chapter 5", time: "01:45:00" },
  ];

  return (
    <div
      className={`${className} font-DMSans flex flex-col h-[250px] justify-evenly`}
    >
      {chapters.map((chapter, index) => (
        <button
          key={index}
          onClick={() => setActiveChapter(index)}
          className={`px-4 py-[14px] rounded flex justify-between items-center text-left ${
            activeChapter === index
              ? "bg-[#EFF5FF] font-semibold text-[#608AD2]"
              : "border-b-[1px] border-[#A4E6FF] border-opacity-60"
          }`}
        >
          <p className="text-black">{chapter.title}</p>
          {activeChapter === index && chapter.time && (
            <div className="flex justify-center items-center space-x-1 text-[#608AD2]">
              <WiTime4 className="h-6 w-6" />
              <p className="-translate-y-[1px]">{chapter.time}</p>
            </div>
          )}
        </button>
      ))}
    </div>
  );
}

export default ContentSide;
