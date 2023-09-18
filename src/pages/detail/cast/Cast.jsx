import React from "react";
import fallback from "../../../images/avatar.png";
import { useSelector } from "react-redux";

const Cast = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);
  const skeleton = () => {
    return (
      <div
        role="status"
        className="flex flex-col items-center space-y-8 animate-pulse md:space-y-0 md:space-x-8"
      >
        <div className="flex items-center justify-center w-32 h-32 bg-gray-300 rounded-full dark:bg-gray-700 mb-3">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="w-full">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  };

  return (
    <div className="py-4">
    <span className="text-white my-1 font-semibold">Top Cast</span>

      {loading ? (
        <div className="flex items-center gap-5 ">
          {skeleton()}
          {skeleton()}
          {skeleton()}
          {skeleton()}
          {skeleton()}
          {skeleton()}
        </div>
      ) : (
        <div className="flex items-center gap-5 overflow-x-scroll scrollbar-hide">
          {data?.map((item) => {
            let imgUrl = item.profile_path
              ? url.profile + item.profile_path
              : fallback;
            return (
              <div key={item.id} className="w-32 overflow-hidden shrink-0">
                <div className="my-2 w-28 h-28 ">
                  <img
                    src={imgUrl}
                    alt=""
                    className="object-cover object-top  w-full h-full rounded-full  "
                  />
                </div>
                <div className="my-2 text-center text-white truncate">{item.name}</div>
                <div className="my-1 text-xs text-center text-stone-300">{item.character}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Cast;
