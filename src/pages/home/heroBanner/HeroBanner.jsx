import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import "../../../App.css";

const HeroBanner = () => {
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);

  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");

  const { data, loading } = useFetch("/movie/upcoming");

  /** Now we use useEffect hook with data dependency . When the data in useFetch change it will trigger the action */

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const handleQuery = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  // console.log(background)
  return (
    <div className="hero-banner bg-black relative  lg:h-screen  mb-3">
      <img
        src={background}
        alt=""
        className=" absolute  left-0 opacity-50 object-cover object-center -z-0 h-full w-full"
      />

      <div className=" flex flex-col items-center justify-center text-center  relative text-white py-32  ">
        <div className="my-2">
          <h1 className="font-bold text-3xl lg:text-6xl tracking-wide  heading">
            Welcome
          </h1>
        </div>
        <div className="my-2">
          <p className="font-semibold text-lg">
            Millions of Movies,TV shows and people to discover. Explore Now.
          </p>
        </div>
        <div className="input-wrapper border flex items-center rounded-3xl overflow-hidden my-4  ">
          <input
            type="text"
            placeholder="search for a movie or TV show... "
            className="px-5 py-2 md:w-96 lg:w-96 focus:outline-none text-black "
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={handleQuery}
          />
          <button className="px-5 py-2 bg-orange-600 hover:bg-orange-700">Search </button>
        </div>
      </div>

      <div className="h-24 w-full absolute bottom-0  gradiant"></div>
    </div>
  );
};

export default HeroBanner;
