import noImage from '../images/ActorsPhotoes.png';

export const ActorsPath = poster_path => {
  return ( poster_path
    ? `https://image.tmdb.org/t/p/w342${poster_path}`
    : noImage
);
  };
