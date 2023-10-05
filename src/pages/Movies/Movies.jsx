import { getMovieByQuery } from 'services/Api';
import { useEffect, useState } from 'react';
import MovieList from 'components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';

import data from './Movies.module.css';

function Movies() {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const movieToSearch = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!movieToSearch) return;

    setSearchQuery(movieToSearch);
    getMovieByQuery(movieToSearch).then(({ results }) => {
      setSearchMovies(results);
    });
  }, [movieToSearch]);

  const onFormSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: searchQuery });
  };

  return (
    <div className={data.formStyle}>
      <form onSubmit={onFormSubmit} className={data.form}>
        <input
          className={data.SearchFormInput}
          type="text"
          autoComplete="off"
          name="searchMovie"
          autoFocus
          placeholder="Enter movie name"
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button type="submit"> Search </button>
      </form>
      <MovieList movies={searchMovies} />
    </div>
  );
}

export default Movies;
