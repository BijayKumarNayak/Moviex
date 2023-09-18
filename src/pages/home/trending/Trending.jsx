import React, { useState } from "react";
import SwitchTab from "../../../components/tab/SwitchTab";
import useFetch from "../../../hooks/useFetch";

import Carousal from "../../../components/carousal/Carousal";

const Trending = () => {
  const [endPoint, setEndPoint] = useState("day");
 

  const onTabChange = (tab) => {
    setEndPoint(tab === "Day" ? "day" : "week");
  };

  const { data, loading } = useFetch(`/trending/all/${endPoint}`);

  return (
    <div className="px-5">
      <div className="flex items-center justify-between px-2">
        <span className="font-semibold text-white">Trending</span>
        <SwitchTab data={["Day", "Week"]} onTabChange={onTabChange} />
      </div>
      <div>
        <Carousal data={data?.results} loading={loading} endpoint={endPoint} />
      </div>
    </div>
  );
};

export default Trending;
