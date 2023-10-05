import { getCastById } from 'services/Api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import data from './Cast.module.css';

function Cast() {
  const { idMovie } = useParams();
  const [castInfo, setCastInfo] = useState();

  const getCast = async idMovie => {
    const { cast } = await getCastById(idMovie);
    setCastInfo(cast);
  };

  useEffect(() => {
    getCast(idMovie);
  }, [idMovie]);

  if (!castInfo) {
    return null;
  }

  return (
    <>
      <ul className={data.castContainer}>
        {castInfo.map(({ character, name, profile_path, id }) => {
          const castImage = profile_path
            ? `https://image.tmdb.org/t/p/w500/${profile_path}`
            : 'https://dummyimage.com/250x375/000/fff&text=Image+is+not+defined';

          return (
            <li key={id} className={data.actorItem}>
              <div className={data.actorImg}>
                <img src={castImage} alt={name} className={data.image} />
                <p className={data.actorName}>{name}</p>
                <p className={data.actorChar}>{character}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Cast;
