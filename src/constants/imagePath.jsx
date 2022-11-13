import noImage from '../images/no-image.png';

export const imagePath = poster_path => {
  return ( poster_path
    ? `https://image.tmdb.org/t/p/w342${poster_path}`
    : noImage
);
  };
