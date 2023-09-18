import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Select from "react-select";
import { fetchApiData } from "../../utils/api";
import Spinner from "../../components/spinner/Spinner";
import MovieCard from "../../components/movieCard/MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";

const Explore = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { mediaType } = useParams();


  const fetchInitialData = () => {
    setLoading(true);
    fetchApiData(`/discover/${mediaType}`).then((res) => {
      setData(res);
      setPageNum((prev) => prev + 1);
      setLoading(false);
    });
  };

  const fetchNextPageData = () => {
    fetchApiData(`/discover/${mediaType}?page=${pageNum}`).then((res) => {
      if (data?.results) {
        setData({
          ...data,
          results: [...data?.results, ...res.results],
        });
      } else {
        setData(res);
      }
      setPageNum((prev) => prev + 1);
    });
  };

  useEffect(() => {
    setData(null);
    setPageNum(1);

    fetchInitialData();
  }, [mediaType]);

  return (
    <div className=" container ">
      <div className="mb-3 ">
        <div className="text-white font-bold">
          {mediaType === "tv" ? "Explore TV Shows" : "Explore Movies"}
        </div>
      </div>

      {loading && <Spinner />}
      {!loading && (
        <>
          {data?.results?.length > 0 ? (
            <InfiniteScroll
              className="content flex items-center justify-evenly flex-wrap"
              dataLength={data?.results?.length || []}
              next={fetchNextPageData}
              hasMore={pageNum <= data?.total_pages}
              loader={<Spinner />}
            >
              {data?.results?.map((item, index) => {
                if (item.media_type === "person") return;
                return (
                  <MovieCard key={index} data={item} mediaType={mediaType} />
                );
              })}
            </InfiniteScroll>
          ) : (
            <span className="resultNotFound">Sorry, Results not found!</span>
          )}
        </>
      )}
    </div>
  );
};

export default Explore;
