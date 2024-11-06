import { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineLightBulb } from "react-icons/hi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { SiBookmeter } from "react-icons/si";
import { CiStar } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { IoClipboardOutline } from "react-icons/io5";

function Sidebar() {
  const [activeLink, setActiveLink] = useState(3);

  const navItems = [
    { label: "Dashboard", icon: <RxDashboard size={20} /> },
    { label: "Learn", icon: <HiOutlineLightBulb size={22} /> },
    { label: "Forums", icon: <HiOutlineUserGroup size={22} /> },
    { label: "Upskill", icon: <IoClipboardOutline size={20} /> },
    { label: "Contest", icon: <SiBookmeter size={20} /> },
    { label: "Leaderboard", icon: <CiStar size={24} /> },
  ];

  return (
    <div className="w-[20%] bg-white">
      <div className="w-[75%] mt-8 ml-14">
        <nav className="space-y-4">
          <a href="#" className="flex items-center text-[#172B4D] px-2">
            <IoMdMenu className="mr-3" size={20} />
            <span className="font-DMSans text-[24px] font-black">
              AlgoZenith
            </span>
          </a>
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              onClick={() => setActiveLink(index)}
              className={`flex items-center py-2 px-2 rounded-lg ${
                activeLink === index
                  ? "bg-[#D6F4FF]"
                  : "hover:bg-[#D6F4FF] hover:rounded-lg"
              }`}
            >
              {item.icon}
              <span className="font-DMSans text-[15.04px] ml-3">
                {item.label}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
