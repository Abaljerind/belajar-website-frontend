import { useEffect } from "react";
import "./App.css";
import { getMovieList, searchMovie } from "./api";

const App = () => {
  useEffect(() => {
    getMovieList();
  }, []);

  const search = (q) => {
    console.log(q);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Mania</h1>
        <input
          type="search"
          placeholder="cari film yang anda inginkan..."
          className="Movie-search"
          onChange={({ target }) => search(target.value)}
        />
        <div className="Movie-container">
          <div className="Movie-wrapper">
            <div className="Movie-title">CONTOH PERTAMA</div>
            <img className="Movie-image" src="" />
            <div className="Movie-date">27-11-2023</div>
            <div className="Movie-rate">8.0</div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
