// Replace _YOUR API KEY_ parts with you own API key.
// Read README.md file for detailed instructions.

import HeaderComp from './components/HeaderComp';
import MovieContainer from './components/MovieContainer';
import { useState, useEffect } from 'react';

function App() {
  const [search, setSerach] = useState('');
  const [data, setData] = useState([]);

  const API_URL =
    'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=_YOUR API KEY_&page=';

  const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

  const SEARCH_API =
    'https://api.themoviedb.org/3/search/movie?api_key=_YOUR API KEY_&query="';

  const getMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setData(data.results);
  };

  useEffect(() => {
    if (!search) {
      getMovies(API_URL);
    } else {
      getMovies(SEARCH_API + search);
    }
  }, [search]);

  const onSearchSubmit = (moviename) => {
    setSerach(moviename);
  };

  const goHome = () => {
    setSerach('');
  };

  return (
    <>
      <HeaderComp onSearchSubmit={onSearchSubmit} goHome={goHome} />
      <MovieContainer movieData={data} search={search} />
    </>
  );
}

export default App;
