import { useState } from "react";
import arrow from "../../assets/arrow.svg";
import PropTypes from "prop-types";

const Collapse = ({ title, content, index }) => {
  const [openDetails, setOpenDetails] = useState([]);

  //ajoute ou supprime l'index correspondant
  const toggleDetails = (index) => {
    if (openDetails.includes(index)) {
      //Supprime l'index si correspondant
      setOpenDetails(openDetails.filter((i) => i !== index));
    } else {
      //ajoute l'index dans le tableau
      setOpenDetails([...openDetails, index]);
    }
  };

  return (
    <div>
      <div className="titre-collapse">
        {title}
        <img
          src={arrow}
          alt="arrow"
          className={`arrow-about ${
            openDetails.includes(index) ? "active" : ""
          }`}
          onClick={() => toggleDetails(index)}
        />
      </div>
      <div
        className={`contenu-collapse ${
          openDetails.includes(index) ? "active" : ""
        }`}
      >
        {content}
      </div>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Collapse;
