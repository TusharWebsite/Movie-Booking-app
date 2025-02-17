import React from "react";

const MovieCard = ({
  movie,
  imageUrl,
  name,
  handleAddtoWatchlist,
  handleRemovetoWatchlist,
  watchlist,
}) => {
  const isInWatchlist = watchlist.some((m) => m.id === movie.id);

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative h-[45vh] w-[200px] bg-center bg-cover bg-no-repeat rounded-xl hover:cursor-pointer hover:scale-105 duration-300 shadow-lg"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {isInWatchlist ? (
          <div
            onClick={() => handleRemovetoWatchlist(movie)}
            className="absolute top-3 right-3 text-white text-2xl bg-gray-900/60 rounded-lg cursor-pointer"
          >
            ❤️
          </div>
        ) : (
          <div
            onClick={() => handleAddtoWatchlist(movie)}
            className="absolute top-3 right-3 text-white text-2xl bg-gray-900/60 rounded-lg cursor-pointer"
          >
            &#129293;
          </div>
        )}
      </div>
      <div className="mt-3 w-[200px] text-center bg-gray-800 text-white font-semibold text-lg p-2 rounded-md shadow-md">
        {name}
      </div>
    </div>
  );
};


export default MovieCard;
