import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImg, title, id }) {
  return (
    <Link to={`/movie/${id}`}>
      <div key={id}>
        <img src={coverImg} alt={title} />
        <h3>{title}</h3>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default Movie;
