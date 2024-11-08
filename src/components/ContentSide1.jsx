import { useState } from "react";
import { WiTime4 } from "react-icons/wi";

function ContentSide1({ className }) {
  const [activeChapter, setActiveChapter] = useState(1);

  const chapters1 = [
    { title: "Chapter 1", time: "05:00:00" },
    { title: "Chapter 2", time: "03:30:00" },
    { title: "Chapter 3", time: "04:15:00" },
    { title: "Chapter 4", time: "02:20:00" },
    { title: "Chapter 5", time: "01:45:00" },
  ];

  const chapters2 = [
    { title: "Ch. 1", time: "05:00:00" },
    { title: "Ch. 2", time: "03:30:00" },
    { title: "Ch. 3", time: "04:15:00" },
    { title: "Ch. 4", time: "02:20:00" },
    { title: "Ch. 5", time: "01:45:00" },
  ];

  return (
    <>
      <div
        className={`${className} font-DMSans hidden lg:flex flex-col h-[250px] justify-evenly mr-4`}
      >
        {chapters1.map((chapter, index) => (
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

      <div
        className={`font-DMSans lg:hidden flex flex-wrap gap-[11px] justify-between pb-4`}
      >
        {chapters2.map((chapter, index) => (
          <button
            key={index}
            onClick={() => setActiveChapter(index)}
            className={`p-3 rounded flex justify-between items-center text-left  ${
              activeChapter === index
                ? "bg-[#EFF5FF] font-semibold text-[#608AD2] shadow-xl"
                : "shadow-lg"
            }`}
          >
            <p className="text-black">{chapter.title}</p>
          </button>
        ))}
      </div>
    </>
  );
}

export default ContentSide1;
