import { useLocation } from "react-router-dom";

const banner = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location = useLocation();

  return (
    <div className={location.pathname === "/" ? "banner" : "banner-about"}>
      {location.pathname === "/" ? <div className="overlay"></div> : ""}
      {location.pathname === "/" ? (
        <p className="text-overlay">
          Chez vous, <br className="responsive-break" /> partout et ailleurs
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default banner;
