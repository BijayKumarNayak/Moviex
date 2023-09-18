import React, { useState } from "react";
import SwitchTab from "../../../components/tab/SwitchTab";
import useFetch from "../../../hooks/useFetch";
import { useDispatch } from "react-redux";
import Carousal from "../../../components/carousal/Carousal";


const TopRated = () => {
  const dispatch = useDispatch();
  const [endPoint, setEndPoint] = useState("movie");
 

  const onTabChange = (tab) => {
    setEndPoint(tab === "Movie" ? "movie" : "tv");
  };

  const { data, loading } = useFetch(`/${endPoint}/top_rated`);

  return (
    <div className="px-5">
      <div className="flex items-center justify-between px-2">
        <span className="font-semibold text-white">Top Rated</span>
        <SwitchTab data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </div>
      <div>
        <Carousal data={data?.results} loading={loading} endpoint={endPoint} />
      </div>
    
    </div>
  );
};

export default TopRated;
