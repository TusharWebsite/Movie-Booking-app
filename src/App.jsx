import "./App.css";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner";
import { useEffect, useState } from "react";

function App() {
  const [watchlist, setWatchlist] = useState([]);

  const handleAddToWatchlist = (movie) => {
    const updatedWatchlist = [...watchlist, movie];
    setWatchlist(updatedWatchlist);
    localStorage.setItem("movieApp", JSON.stringify(updatedWatchlist)); // Save after updating state
  };

  const handleRemoveFromWatchlist = (movie) => {
    const updatedWatchlist = watchlist.filter((m) => m.id !== movie.id);
    setWatchlist(updatedWatchlist);
    localStorage.setItem("movieApp", JSON.stringify(updatedWatchlist)); // Update local storage
  };

  useEffect(() => {
    const watchlistLocal = localStorage.getItem("movieApp");
    if (watchlistLocal) {
      setWatchlist(JSON.parse(watchlistLocal));
    }
  }, []); // Empty dependency array (runs once on mount)

    // Delete Function
    const handleDelete = (id) => {
      setWatchlist(watchlist.filter((movie) => movie.id !== id));
    };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Movies
                watchlist={watchlist}
                handleAddToWatchlist={handleAddToWatchlist}
                handleRemoveFromWatchlist={handleRemoveFromWatchlist}
              />
            </>
          }
        />
        <Route path="/watchlist" element={<Watchlist watchlist={watchlist} handleDelete={handleDelete} setWatchlist={setWatchlist} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
