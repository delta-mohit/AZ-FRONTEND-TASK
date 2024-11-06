import { HiBell } from "react-icons/hi";

function Header() {
  return (
    <div className="flex h-10 justify-end mb-6 space-x-3">
      <div className="w-10 flex justify-center items-center rounded-md bg-[#ddf6ff]">
        <HiBell size={20} />
      </div>
      <div className="w-10 h-10">
        <img src="/Photo.jpg" className="w-full h-full rounded-full" />
      </div>
    </div>
  );
}
export default Header;
