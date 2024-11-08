import { HiBell } from "react-icons/hi";
import { IoMdMenu } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { sideMenuActions } from "../features/Sidemenu/SidemenuSlice";
import { SIDEMENU } from "../../constants";
function Header() {
  const dispatch = useDispatch();
  const sideMenu = useSelector((state) => state.sideMenu);
  const menuClickHandler = () => {
    if (sideMenu === SIDEMENU.LARGE) dispatch(sideMenuActions.setSmall());
    else dispatch(sideMenuActions.setLarge());
  };
  return (
    <>
      <div className="flex justify-between px-3 ">
        <div className="flex gap-3 text-[#172B4D]">
          <button>
            <IoMdMenu size={25} onClick={() => menuClickHandler()} />
          </button>
          <span className="font-DMSans font-black text-[25px]">AlgoZenith</span>
        </div>
        <div className="flex items-center gap-5">
          <button className="flex w-8 h-[90%] justify-center items-center rounded-md bg-[#ddf6ff]">
            <HiBell size={20} />
          </button>
          <div className="w-10 h-10">
            <img src="/Photo.jpg" className="w-full h-full rounded-full" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
