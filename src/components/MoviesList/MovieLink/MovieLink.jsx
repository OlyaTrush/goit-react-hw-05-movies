import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { StyledMovieLink, MovieImage, MovieItem } from './MovieLink.styled';
import { imagePath } from 'constants/imagePath';

export const MovieLink = ({ movie: { id, original_title, poster_path } }) => {
  const currentLocation = useLocation();
  const movieLink = `/movies/${id}`;

  return (
    <MovieItem>
      <StyledMovieLink to={movieLink} state={currentLocation}>
        <MovieImage
          src={imagePath(poster_path)}
          alt={original_title}
          width={240}
          height={340}
        />
        {original_title}
      </StyledMovieLink>
    </MovieItem>
  );
};

MovieLink.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    original_title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
  }).isRequired,
};
