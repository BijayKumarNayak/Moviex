import React, { useState } from "react";

import VideoPopup from "../../../components/videoPopup/VideoPopup";

const VideoSection = ({ data, loading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoId, setVideoId] = useState("");
  const togglePopup = () => {
    console.log("toggle is working");
    setIsOpen(!isOpen);
  };
  const loadingSkeleton=()=>{
    return(
      
<div role="status" className="flex items-center justify-center w-48 h-32 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
<svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
<path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
<path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
</svg>
<span className="sr-only">Loading...</span>
</div>

    )
  }
  return (
    <div className="mb-3">
      <span className="font-bold text-white">Official Videos</span>
      {loading ? (
        <div className="flex items-center gap-5">
        {loadingSkeleton()}
        {loadingSkeleton()}
        {loadingSkeleton()}
        {loadingSkeleton()}
 
        </div>
      ) : (
        <div className="flex items-center gap-5 overflow-x-scroll scrollbar-hide shrink-0">
          {data?.results?.map((video) => {
            return (
              <div
                key={video.id}
                className="w-48 my-2 h-36 "
                onClick={() => {
                  setVideoId(video.key);
                  togglePopup();
                }}
              >
                <div className="relative flex items-center justify-center w-48 h-32 bg-black ">
                  <img
                    src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                    alt=""
                    className="absolute top-0 left-0 object-cover object-center w-full h-full rounded "
                  />
                  <i className="z-50 mr-2 text-5xl font-bold text-white cursor-pointer fa-regular fa-circle-play lg:text-3xl hover:text-red-500" onClick={togglePopup}></i>
                </div>
                <div className="my-1 text-sm text-white truncate">{video.name}</div>
              </div>
            );
          })}
        </div>
      )}
      <VideoPopup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        videoId={videoId}
        setVideoId={setVideoId}
        togglePopup={togglePopup}
      />
    </div>
  );
};

export default VideoSection;
