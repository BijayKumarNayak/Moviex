import React from "react";
import DetailBanner from "./detailBanner/DetailBanner";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Cast from "./cast/Cast";
import VideoSection from "./videoSection/VideoSection";
import Similar from "./similar/Similar";
import Recommended from "./recommended/Recommended";

const Detail = () => {
  const { mediaType, id } = useParams();

  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );
 
 

  return (
    <div className="container">
      <DetailBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideoSection data={data} />
      <Similar mediaType={mediaType} id={id}  />
      <Recommended mediaType={mediaType} id={id} />
    </div>
  );
};

export default Detail;
