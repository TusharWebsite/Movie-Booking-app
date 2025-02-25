import React, { useState } from "react";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";
const Watchlist = ({ watchlist, handleDelete,setWatchlist }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered Movies based on search
  const filteredMovies = watchlist.filter((movie) =>
    movie.original_title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortIncrease = ()=>{
    let sortIncreasing = watchlist.sort((movieA,movieB)=>{
      return movieA.vote_average - movieB.vote_average
    })
    setWatchlist([...sortIncreasing])
  }

  const sortDecrease = ()=>{
    let sortDecreasing = watchlist.sort((movieA,movieB)=>{
      return movieB.vote_average - movieA.vote_average
    })
    setWatchlist([...sortDecreasing])
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg mt-[50px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">🎬 My Watchlist</h2>
        <Link to="/">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
            + Add Movie
          </button>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search Movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Movie Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-3 px-4 text-left">Movie</th>
              <th className="py-3 px-4 flex justify-center items-center">
                <div onClick={sortDecrease}>
                  <FaLongArrowAltDown />
                </div>
                Rating
                <div onClick={sortIncrease}>
                  <FaLongArrowAltUp />
                </div>
              </th>
              <th className="py-3 px-4">Popularity</th>
              <th className="py-3 px-4">Genre</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredMovies.length > 0 ? (
              filteredMovies.map((movie) => (
                <tr
                  key={movie.id}
                  className="border-b border-gray-700 hover:bg-gray-800 transition"
                >
                  <td className="flex items-center gap-4 py-4 px-4">
                    <img
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      alt={movie.original_title}
                      className="w-16 h-24 rounded-md object-cover"
                    />
                    <span className="font-semibold">
                      {movie.original_title}
                    </span>
                  </td>
                  <td className="text-center">{movie.vote_average}</td>
                  <td className="text-center">{movie.popularity}</td>
                  <td className="text-center">{movie.genre_ids?.[0]}</td>
                  <td className="text-center">
                    <button
                      className="text-red-500 hover:text-red-600 transition"
                      onClick={() => handleDelete(movie.id)}
                    >
                      <Trash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-400">
                  No movies found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Watchlist;
