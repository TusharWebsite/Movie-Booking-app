import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 z-50 flex items-center shadow-lg backdrop-blur-sm bg-background/50 ">
        <img
          src={logo}
          alt="Logo"
          className="w-[70px] h-[70px] ml-5 hover:scale-105 transition-transfrom duration-200"
        />
        <Link
          to="/"
          className="text-blue-500 ml-5 font-bold text-2xl hover:scale-105 transition-transfrom duration-200"
        >
          Movies
        </Link>
        <Link
          to="/watchlist"
          className="text-blue-500 ml-5 font-bold text-2xl hover:scale-105 transition-transfrom duration-200"
        >
          WatchList
        </Link>
      </div>
    </>
  );
};

export default Navbar;
