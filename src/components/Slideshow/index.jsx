import { useState } from "react";
import arrow from "../../assets/arrow.svg";

const slideshow = ({ pictures }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentIndex, setCurrentIndex] = useState(0);
  const img = pictures[currentIndex];
  const imagesLength = pictures.length;

  const nextIndex = () => {
    setCurrentIndex((currentIndex) => (currentIndex + 1) % imagesLength);
  };

  const prevIndex = () => {
    setCurrentIndex(
      (currentIndex) => (currentIndex - 1 + imagesLength) % imagesLength
    );
  };

  return (
    <div className="slideshow">
      <img className="slideshow-img" src={img} alt={pictures.title} />
      <div className="slideshow-counter">
        {currentIndex + 1} / {imagesLength}
      </div>
      <div className="slideshow-arrow">
        <img
          className="slideshow-arrow-left"
          src={arrow}
          alt="arrow"
          onClick={prevIndex}
        />
        <img
          className="slideshow-arrow-right"
          src={arrow}
          alt="arrow"
          onClick={nextIndex}
        />
      </div>
    </div>
  );
};

export default slideshow;
