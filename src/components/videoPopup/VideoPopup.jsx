import React from "react";
import ReactPlayer from "react-player";

const VideoPopup = ({
  isOpen,
  setIsopen,
  videoId,
  setVideoId,
  togglePopup,
}) => {
  return (
    <>
   
    {
      isOpen ?( <div className="fixed inset-0 top-0 left-0 z-50 flex items-center justify-center w-full h-full">
      <div className="   w-full h-full bg-black opacity-80 bg-blend-luminosity  " onClick={togglePopup}></div>
        <div className="absolute z-50 w-3/4 h-2/4 aspect-video  border-2 border-sky-400">
        <button className="absolute right-0 text-white bg-red-500 -top-9 rounded p-1 hover:bg-red-600" onClick={togglePopup}>Close</button>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            controls
            width="100%"
            height="100%"
            // playing={true}
          />
        </div>
      </div>):("")
    }
   
    </>
  );
};

export default VideoPopup;
