import { HiBell } from "react-icons/hi";

function Header() {
  return (
    <div className="flex h-8 justify-end mb-6 space-x-3">
      <div className="w-8 flex justify-center items-center rounded-md bg-[#ddf6ff]">
        <HiBell size={20} />
      </div>
      <div className="w-8 rounded-full bg-[#D9D9D9]"></div>
    </div>
  );
}
export default Header;
