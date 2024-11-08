import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineLightBulb } from "react-icons/hi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { SiBookmeter } from "react-icons/si";
import { CiStar } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { IoClipboardOutline } from "react-icons/io5";
import { SIDEMENU } from "../../constants.js";
import { sideMenuActions } from "../features/Sidemenu/SidemenuSlice.js";

function Sidebar() {
  const [activeLink, setActiveLink] = useState(3);
  const sideMenu = useSelector((state) => state.sideMenu);
  const dispatch = useDispatch();
  const changeSideBar = (index) => {
    setActiveLink(index);
    dispatch(sideMenuActions.setLarge());
  };
  const navItems = [
    { label: "Dashboard", icon: <RxDashboard size={20} /> },
    { label: "Learn", icon: <HiOutlineLightBulb size={22} /> },
    { label: "Forums", icon: <HiOutlineUserGroup size={22} /> },
    { label: "Upskill", icon: <IoClipboardOutline size={20} /> },
    { label: "Contest", icon: <SiBookmeter size={20} /> },
    { label: "Leaderboard", icon: <CiStar size={24} /> },
  ];

  return (
    <>
      {sideMenu === SIDEMENU.LARGE ? (
        <div className="max-w-[228px] mr-7 bg-white">
          <div className="mt-4">
            <nav className="space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={() => setActiveLink(index)}
                  className={`flex items-center p-3 rounded-lg ${
                    activeLink === index
                      ? "bg-[#D6F4FF]"
                      : "hover:bg-[#D6F4FF] hover:rounded-lg"
                  }`}
                >
                  {item.icon}
                  <span className="font-DMSans text-[16px] ml-3">
                    {item.label}
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      ) : (
        <div className="w-[42px] mr-7 bg-white hidden sm:block">
          <div className="mt-4">
            <nav className="space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={() => changeSideBar(index)}
                  className={`flex items-center justify-center p-3 rounded-lg ${
                    activeLink === index
                      ? "bg-[#D6F4FF]"
                      : "hover:bg-[#D6F4FF] hover:rounded-lg"
                  } `}
                >
                  {item.icon}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
