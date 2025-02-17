import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [watchlist, setWatchlist] = useState([]);

  const handleAddtoWatchlist = (movie) => {
    const newWatchlist = [...watchlist, movie];
    setWatchlist(newWatchlist);
    console.log(newWatchlist);
  };

  const handleRemovetoWatchlist = (movie) => {
    const updatedWatchlist = watchlist.filter((m) => m.id !== movie.id);
    setWatchlist(updatedWatchlist);
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  const handlePrev = () => {
    if (pageNo === 1) {
      setPageNo(pageNo);
    } else {
      setPageNo(pageNo - 1);
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=b9a81ff267aca578505b85ec278f6121&language=en-US&page=${pageNo}`
      )
      .then((response) => {
        setMovies(response.data.results); // Store movie data in state
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, [pageNo]);

  return (
    <>
      <div className="text-center font-bold mt-5 text-2xl">Trending Movies</div>
      <div className="flex flex-wrap justify-center gap-5 p-5">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              name={movie.original_title}
              movie={movie}
              handleAddtoWatchlist={handleAddtoWatchlist}
              handleRemovetoWatchlist={handleRemovetoWatchlist}
              watchlist={watchlist}
            />
          ))
        ) : (
          <p className="text-center">Loading movies...</p>
        )}
      </div>
      <Pagination
        pageNo={pageNo}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </>
  );
};

export default Movies;

//https://api.themoviedb.org/3/movie/popular?api_key=b9a81ff267aca578505b85ec278f6121&language=en-US&page=1
