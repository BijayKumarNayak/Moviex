import React, { useRef } from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import LoadingSkeleton from "../loadingSkeleton/LoadingSkeleton";
import CircularRating from "../circularRating/CircularRating";
import posterFallback from "../../images/no-poster.png";
import { useNavigate } from "react-router-dom";

const Carousal = ({ data, loading, endpoint, title }) => {
  const navigate = useNavigate();
  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.home);
  const navigation = (direction) => {
    const container = carouselContainer.current;

    const scrollAmount =
      direction === "left"
        ? container.scrollLeft - (container.offsetWidth +16 )
        : container.scrollLeft + (container.offsetWidth +16 );

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };
  if (data?.length === 0) {
    return;
  } else {
    return (
      <div className="overflow-scroll scrollbar-hide  " ref={carouselContainer}>
        {title ? <div className="text-white font-semibold">{title}</div> : ""}

        {!loading ? (
          <div className="flex items-center w-full gap-6 md:gap-4 lg:gap-4 py-5 px-1    scrollbar-hide shrink-0">
            <div
              className="absolute left-0 z-50   w-8 h-8 rounded-full cursor-pointer bg-slate-600 hidden   lg:block "
              onClick={() => navigation("left")}
            >
              <i className="font-extrabold text-white fa-solid fa-arrow-left hover:text-cyan-400  flex justify-center items-center m-2"></i>
            </div>
            <div
              className="absolute right-0 z-50  w-8 h-8  rounded-full cursor-pointer bg-slate-600 hidden  lg:block"
              onClick={() => navigation("right")}
            >
              <i className="font-extrabold text-white fa-solid fa-arrow-right hover:text-cyan-400 m-2"></i>
            </div>
            {data?.map((item) => {
              const posterUrl = item.poster_path
                ? url.poster + item.poster_path
                : posterFallback;
              return (
                <div
                  key={item.id}
                  className="w-44 overflow-hidden rounded-lg cursor-pointer lg:w-[19%] shrink-0 shadow-md shadow-slate-600  "
                  onClick={() =>
                    navigate(`/${item.media_type || endpoint}/${item.id}`)
                  }
                >
                  <div className="relative w-full h-60 lg:h-80 ">
                    <img
                      src={posterUrl}
                      alt=""
                      className="absolute object-cover object-center w-full h-full duration-200 hover:scale-105 "
                    />
                    <div className="absolute w-12 h-12 -bottom-3 ">
                      <CircularRating rating={item.vote_average.toFixed(1)} />
                    </div>
                  </div>

                  <div className="flex flex-col m-3 ">
                    <span className="text-white truncate">
                      {item.title || item.name}
                    </span>
                    <span className="text-sm font-semibold text-stone-400">
                      {dayjs(item.release_date).format("MMM D, YYYY")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex items-center gap-3 overflow-hidden lg:gap-4 shrink-0">
            <LoadingSkeleton />
            <LoadingSkeleton /> <LoadingSkeleton /> <LoadingSkeleton />{" "}
            <LoadingSkeleton />
          </div>
        )}
      </div>
    );
  }
};

export default Carousal;
