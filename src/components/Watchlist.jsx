import React from "react";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
const Watchlist = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg mt-[50px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">🎬 My Watchlist</h2>
        <Link to='/' >
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
          + Add Movie
        </button>
        </Link>

      </div>

      {/* Genre Buttons */}
      <div className="flex gap-4 mb-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Action
        </button>
        <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition">
          Drama
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search Movies..."
          className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Movie Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-3 px-4 text-left">Movie</th>
              <th className="py-3 px-4">Rating</th>
              <th className="py-3 px-4">Popularity</th>
              <th className="py-3 px-4">Genre</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700 hover:bg-gray-800 transition">
              <td className="flex items-center gap-4 py-4 px-4">
                <img
                  src="https://qqcdnpictest.mxplay.com/pic/bce7ae02445dad432bdab581e180ceef/en/2x3/312x468/e5d059ce27ff2c4e01308f0b75dbeb56_1280x1920.webp"
                  alt="Jumanji"
                  className="w-16 h-24 rounded-md object-cover"
                />
                <span className="font-semibold">Jumanji</span>
              </td>
              <td className="text-center">7.8</td>
              <td className="text-center">9.8</td>
              <td className="text-center">Action</td>
              <td className="text-center">
                <button className="text-red-500 hover:text-red-600 transition">
                  <Trash2 size={20} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Watchlist;
 