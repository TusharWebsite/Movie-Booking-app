import React from 'react';

const MovieCard = ({ imageUrl, name }) => {
  return (
    <div className="flex flex-col items-center">
      {/* Movie Poster */}
      <div
        className="relative h-[45vh] w-[200px] bg-center bg-cover bg-no-repeat rounded-xl hover:cursor-pointer hover:scale-105 duration-300 shadow-lg"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      {/* Movie Title */}
      <div className="mt-3 w-[200px] text-center bg-gray-800 text-white font-semibold text-lg p-2 rounded-md shadow-md">
        {name}
      </div>
    </div>
  );
};

export default MovieCard;
