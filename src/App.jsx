import { useEffect } from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";

import { fetchApiData } from "./utils/api";
import { useDispatch } from "react-redux";
import { getApiConfiguration} from "./store/homeSlice";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SearchResult from "./pages/searchResult/SearchResult";

const App = () => {
  const dispatch = useDispatch();
  //  console.log(url)
  // console.warn(url)
  useEffect(() => {
    fetchImageApi();
  }, []);
  const fetchImageApi = async () => {
    fetchApiData("/configuration").then((res) => {
      // console.log(res);
      //  now we ctreate an object for backdrop image ,poster image and profile image url
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };

  return (
    <div>
     
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:mediaType/:id" element={<Detail />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
     
    </div>
  );
};

export default App;
