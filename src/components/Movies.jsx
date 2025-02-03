import React from "react";
import MovieCard from "./MovieCard";

const Movies = () => {
  return(
    <>
    <div className="text-center font-bold mt-5">
      Trending Movies
    </div>
    <div className="flex flex-row flex-wrap justify-around">
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
    </div>
    </>
  )
};

export default Movies;
