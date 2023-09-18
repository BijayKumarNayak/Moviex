

import React, { useState } from "react";

const SwitchTab = ({ data ,onTabChange}) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index,tab) => {
    setActiveTab(index);
    onTabChange(tab, index);
  };

  return (
    <div className="switchingtab h-8 flex items-center  p-1  bg-white  rounded-2xl">
      <div className=" font-semibold flex items-center justify-center rounded-2xl ">
        {data.map((tab, index) => (
          <span
            key={index}
            onClick={() => handleTabClick(index,tab)}
            className={`cursor-pointer  px-4 ${
              activeTab === index ? "bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-2xl" : ""
            }`}
          >
            {tab}
          </span>
        ))}
        <span className="mt-4">{data[activeTab].content}</span>
      </div>
    </div>
  );
};

export default SwitchTab;
