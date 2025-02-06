import starGrey from "../../assets/starGrey.svg";
import starSalmon from "../../assets/starSalmon.svg";
import PropTypes from "prop-types";

const Informations = ({ house }) => {
  const rating = house.rating;

  return (
    <div className="logement-resume">
      <div className="logement-block-1">
        <div>
          <div className="logement-title">{house.title}</div>
          <div className="logement-location">{house.location}</div>
        </div>
        <div className="logement-tags">
          <ul>
            {house.tags.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="logement-block-2">
        <div className="logement-host">
          <div>{house.host.name}</div>
          <img src={house.host.picture} />
        </div>
        <div className="rating">
          <ul>
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                src={index < rating ? starSalmon : starGrey}
                alt={`Star ${index + 1}`}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

Informations.propTypes = {
  house: PropTypes.object.isRequired,
};
export default Informations;
