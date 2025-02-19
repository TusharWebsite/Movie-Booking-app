import "./App.css";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner";
import { useState } from 'react';

function App() {
  const [watchlist, setWatchlist] = useState([]);

  const handleAddToWatchlist = (movie) => {
    setWatchlist([...watchlist, movie]);
  };

  const handleRemoveFromWatchlist = (movie) => {
    setWatchlist(watchlist.filter((m) => m.id !== movie.id));
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
        <Route path="/watchlist" element={<Watchlist watchlist={watchlist} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;