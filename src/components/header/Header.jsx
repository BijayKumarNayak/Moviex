import React, { useEffect, useState } from "react";
import logo from "../../images/movix-logo.svg";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import { useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [shownavbar, setShownavbar] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchopen] = useState(false);
  const [query, setQuery] = useState("");
  const [lastscrolly, setLastScrolly] = useState(0);

  const handleNavbar = () => {
    if (window.scrollY > 100) {
      if (window.scrollY > lastscrolly && !menuOpen) {
        setShownavbar(false);
      }
    } else setShownavbar(true);

    setLastScrolly(window.scrollY);
  };

  // set the scroll to (0,0) for a new location
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // handling the navbar according the scroll value
  useEffect(() => {
    window.addEventListener("scroll", handleNavbar);
    return () => {
      window.removeEventListener("scroll", handleNavbar);
    };
  }, [lastscrolly]);

  // console.log(lastscrolly)

  const handleQuery = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      // console.log("ok");

      navigate(`/search/${query}`);
      setTimeout(() => {
        setSearchopen(false);
      }, 1000);
    }
  };
  const handleNavigate = (type) => {
    console.log(type);
    if (type === "movie") {
      navigate("/explore/movie");
    } else {
      navigate("/explore/tv");
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleSearch = () => {
    setSearchopen(!searchOpen);
  };

  return (
    <div className="">
      {shownavbar && (
        <nav className="fixed z-50 w-full header ">
          <div className="flex items-center justify-between px-3 py-2 ">
            <div onClick={() => navigate("/")}>
              <img src={logo} alt="" />
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center cursor-pointer ">
                <li
                  className="mx-2 font-bold text-white cursor-pointer hover:text-orange-500"
                  onClick={() => handleNavigate("movie")}
                >
                  Movies
                </li>
                <li
                  className="mx-2 font-bold text-white hover:text-orange-500"
                  onClick={() => handleNavigate("tv")}
                >
                  TV shows
                </li>
                <li className="mx-2 font-bold">
                  <i
                    className="text-white fa-solid fa-magnifying-glass"
                    onClick={toggleSearch}
                  ></i>
                </li>
                <li></li>
              </ul>
            </div>
            <div className="md:hidden lg:hidden  " onClick={toggleMenu}>
              <i className="text-white fa-solid fa-bars "></i>
            </div>
          </div>
          {menuOpen && (
            <div className="md:hidden">
              <div className="flex flex-col items-center mt-4 space-y-2">
                <ul className="text-white ">
                  {" "}
                  <li
                    className="font-bold hover:text-orange-500"
                    onClick={() => handleNavigate("movie")}
                  >
                    Movies
                  </li>
                  <li
                    className="font-bold  hover:text-orange-500"
                    onClick={() => handleNavigate("tv")}
                  >
                    TV shows
                  </li>
                </ul>
              </div>
            </div>
          )}
          {searchOpen && (
            <div className="absolute z-10 flex items-center p-2 overflow-hidden bg-white rounded-2xl top-16 left-96 ">
              <input
                type="text"
                placeholder="search here"
                className="p-2 w-96 focus:outline-none"
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={handleQuery}
              />
              <i
                className="relative text-lg text-black fa-solid fa-xmark hover:text-red-600"
                onClick={toggleSearch}
              ></i>
            </div>
          )}
        </nav>
      )}
    </div>
  );
};

export default Header;
