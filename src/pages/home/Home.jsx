import React, { Suspense } from "react";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
const Popular = React.lazy(() => import("./popular/Popular"));
const TopRated =React.lazy(()=>import ("./topRated/TopRated"));

const Home = () => {
  return (
    <div className="homepage">
      <HeroBanner />

      <Trending />

      <Suspense fallback={<div>Loading...</div>}>
        <Popular />
        <TopRated/>
      </Suspense>
    </div>
  );
};

export default Home;
