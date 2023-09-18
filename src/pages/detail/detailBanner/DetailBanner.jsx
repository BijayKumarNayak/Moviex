import React, { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import posterFallback from "../../../images/no-poster.png";
import dayjs from "dayjs";
import CircularRating from "../../../components/circularRating/CircularRating";

import ReactPlayer from "react-player";
import VideoPopup from "../../../components/videoPopup/VideoPopup";

const DetailBanner = ({ video, crew }) => {
  const { mediaType, id } = useParams();
  const { url } = useSelector((state) => state.home);

  const [videoId, setVideoId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const director = crew?.filter((person) => person.job === "Director");
  const writer = crew?.filter(
    (person) =>
      person.job === "Screenplay" ||
      person.job === "Story" ||
      person.job === "Writer"
  );

  const { data, loading } = useFetch(`/${mediaType}/${id}`);

  const toHourandMinutes = (totalMinutes) => {
    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60;
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className=" h-full w-full ">
      {loading ? (
        <div
          role="status"
          className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
        >
          <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
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
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <>
          {!!data && (
            <div>
              <img
                src={url.backdrop + data?.backdrop_path}
                alt=""
                className="absolute top-0 left-0 object-cover object-center w-full h-full opacity-10"
              />

              <div className="relative flex flex-col items-center  md:flex-row lg:flex-row ">
                <div className="w-full h-full mb-5 lg:w-2/5 shadow-md shadow-slate-800">
                  {data?.poster_path ? (
                    <>
                      <img
                        src={url.backdrop + data.poster_path}
                        alt=""
                        className="object-cover object-center rounded"
                      />
                    </>
                  ) : (
                    <>
                      <img src={posterFallback} alt="" />
                    </>
                  )}
                </div>
                <div className="w-full lg:mx-10 md:mx-8 ">
                  <div className="text-white">
                    <span className="text-2xl font-bold lg:text-4xl ">{`${
                      data.name || data.title
                    }(${dayjs(data?.release_date).format("YYYY")})`}</span>
                  </div>
                  <div className="font-semibold text-stone-300">
                    {data.tagline}
                  </div>

                  <div className="flex items-center w-full my-3 ">
                    <div className="mr-4 overflow-hidden w-14 h-14 lg:w-16 lg:h-16">
                      <CircularRating rating={data?.vote_average.toFixed(1)} />
                    </div>
                    <div
                      className="flex items-center justify-center mr-4 cursor-pointer h-14 lg:h-16 "
                      onClick={() => {
                        setVideoId(video.key);
                        togglePopup();
                      }}
                    >
                      <i className="mr-2 text-5xl font-bold text-white fa-regular fa-circle-play lg:text-6xl hover:text-sky-500 "></i>
                      <span className="text-lg font-semibold text-white">
                        {" "}
                        Watch Trailer
                      </span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="font-bold text-white">Overview</div>
                    <div className="text-sm text-white ">{data.overview}</div>
                  </div>
                  <div className="flex items-center gap-6 mb-4   ">
                    {data.status && (
                      <div className="flex flex-col items-center gap-1 text-white  lg:flex-row ">
                        <span className="font-bold">Status: </span>
                        <span className="text-sm text-stone-400">
                          {data.status}
                        </span>
                      </div>
                    )}
                    {data.release_date && (
                      <div className="flex flex-col items-center gap-1 text-white   lg:flex-row">
                        <span className="font-bold text-white">
                          Release Date:{" "}
                        </span>
                        <span className="text-sm text-stone-400">
                          {dayjs(data.release_date).format("MMM D, YYYY")}
                        </span>
                      </div>
                    )}
                    {data.runtime && (
                      <div className="flex flex-col items-center gap-1 text-white  lg:flex-row">
                        <span className="font-bold text-white">Runtime: </span>
                        <span className="text-sm text-stone-400">
                          {toHourandMinutes(data.runtime)}
                        </span>
                      </div>
                    )}
                  </div>

                  {director?.length > 0 && (
                    <div className="mb-4">
                      <span className="font-bold text-white ">Director: </span>
                      <span>
                        {director?.map((dir, index) => (
                          <span key={index} className="text-sm text-stone-400">
                            {dir.name}
                            {director.length - 1 !== index && ", "}
                          </span>
                        ))}
                      </span>
                    </div>
                  )}
                  {writer?.length > 0 && (
                    <div className="text-white mb-4">
                      <span className="font-bold">writer: </span>
                      <span>
                        {writer?.map((wri, index) => (
                          <span key={index} className="text-sm text-stone-400">
                            {wri.name}
                            {writer.length - 1 !== index && ", "}
                          </span>
                        ))}
                      </span>
                    </div>
                  )}
                  {data?.created_by?.length > 0 && (
                    <div>
                      <span className="font-bold">CreatedBy: </span>
                      <span>
                        {director?.map((cb, index) => (
                          <span key={index} className="text-sm text-stone-400">
                            {cb.name}
                            {data?.created_by.length - 1 !== index && ", "}
                          </span>
                        ))}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          <VideoPopup
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            videoId={videoId}
            setVideoId={setVideoId}
            togglePopup={togglePopup}
          />
        </>
      )}
    </div>
  );
};

export default DetailBanner;
