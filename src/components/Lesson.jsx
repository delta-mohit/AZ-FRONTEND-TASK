import { WiTime4 } from "react-icons/wi";

function Lesson({ item }) {
  const title = item.title;
  const icon = item.icon;
  return (
    <>
      <div className="flex justify-between p-6">
        <div className="flex justify-center items-center space-x-2">
          {icon}
          <p className="font-bold -translate-y-[1.5px]">{title}</p>
        </div>
        <div className="flex justify-center items-center space-x-[5px] text-[#17384D]">
          <WiTime4 size={25} />
          <p className="-translate-y-[2px]">10:00</p>
        </div>
      </div>
    </>
  );
}

export default Lesson;
