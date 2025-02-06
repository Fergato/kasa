import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ cover, title, id }) => {
  return (
    <div className="card">
      <Link to={`/Logement/${id}`}>
        <img src={cover} className="cover" alt={title} />
        <p className="title">{title}</p>
      </Link>
    </div>
  );
};

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Card;
