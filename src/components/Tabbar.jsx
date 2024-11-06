import React, { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { IoBriefcaseOutline } from "react-icons/io5";
const tabs = [
  { name: "Mentor Sessions", icon: <CiCalendar className="text-lg mr-2" /> },
  {
    name: "Learning Material",
    icon: <IoBriefcaseOutline className="text-lg mr-2" />,
  },
];

const Tabbar = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <ul class="flex justify-center gap-4 font-DMSans text-sm text-center rounded-lg p-1 bg-gradient-to-b from-blue-50 via-blue-50  to-white">
      {tabs.map((tab, index) => (
        <li>
          <a
            href="#"
            class={`flex justify-center p-2 items-center ${
              activeTab === index
                ? "font-bold bg-white rounded-lg shadow-md"
                : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.icon}
            {tab.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Tabbar;
