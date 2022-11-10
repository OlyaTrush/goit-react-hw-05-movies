import movieVithoutPic from '../images/movie-without-image.png';

export const imagePath = path => {
  return ( path? `http://image.tmdb.org/t/p/w500/${path}` : movieVithoutPic);
};