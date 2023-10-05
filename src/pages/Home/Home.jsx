import { useEffect, useState } from 'react';
import styles from './Home.module.css';
import { getTrendingMovie } from '../../services/Api';
import MovieList from 'components/MovieList/MovieList.jsx';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovie().then(({ results }) => {
      setMovies(results);
    });
  }, []);

  return (
    <div className={styles.div}>
      <h1>Trending</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default Home;
