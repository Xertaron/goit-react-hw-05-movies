import { Link, useLocation } from 'react-router-dom';
import data from './MovieList.module.css';

function MovieList({ movies }) {
  const location = useLocation();

  if (!movies) {
    return;
  } else {
    return (
      <ul className={data.listMovies}>
        {movies.map(movie => {
          const image = movie.backdrop_path
            ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
            : 'https://dummyimage.com/400x225/000/fff&text=Image+is+not+defined';

          return (
            <li key={movie.id} className={data.itemMovie}>
              <Link
                to={`/movies/${movie.id}`}
                state={{ from: location }}
                className={data.cardMovie}
              >
                <h2>{movie.title}</h2>
                <img src={image} alt={movie.title} />
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default MovieList;
