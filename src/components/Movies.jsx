import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=b9a81ff267aca578505b85ec278f6121&language=en-US&page=1"
      )
      .then((response) => {
        setMovies(response.data.results); // Store movie data in state
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  return (
    <>
      <div className="text-center font-bold mt-5 text-2xl">Trending Movies</div>
      <div className="flex flex-wrap justify-center gap-5 p-5">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.id} imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} name ={movie.original_title}/>
          ))
        ) : (
          <p className="text-center">Loading movies...</p>
        )}
      </div>
    </>
  );
};

export default Movies;

//https://api.themoviedb.org/3/movie/popular?api_key=b9a81ff267aca578505b85ec278f6121&language=en-US&page=1
