import React from 'react'
import { useSelector } from 'react-redux';
import posterFallback from "../../images/no-poster.png"
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import CircularRating from '../circularRating/CircularRating';


const MovieCard = ({data,media_type,fromSearch}) => {
    const navigate=useNavigate();
    const {url}=useSelector((state)=>state.home)
    const posterUrl = data?.poster_path
              ? url.poster + data.poster_path
              : posterFallback;
  return (
    <div
  
    className="w-44 overflow-hidden  cursor-pointer lg:w-[19%] shrink-0 my-3 " 
    onClick={()=>navigate(`/${data.media_type || media_type }/${data.id}`)}
  >
    <div className="relative w-full h-72  rounded-lg overflow-hidden ">
      <img
        src={posterUrl}
        alt=""
        className="absolute object-cover object-center w-full h-full duration-200 hover:scale-105 "
      />
      <div className='h-10 w-10 absolute left-1 bottom-1'>
      <CircularRating rating={data.vote_average.toFixed(1)} />
      </div>

    
    </div>

    <div className="flex flex-col m-3 ">
      <span className="text-white truncate h-6">

        {data.title || data.name
        }
      </span>
      <span className="text-sm font-semibold text-stone-400">
        {dayjs(data.release_date).format("MMM D, YYYY")}
      </span>
    </div>
  </div>
  )
}

export default MovieCard
