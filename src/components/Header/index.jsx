import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.svg";

const header = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location = useLocation();
  return (
    <div className="header">
      <img src={Logo} className="logo" />
      <div className="link-header">
        <Link to={"/"} className={location.pathname === "/" ? "underline" : ""}>
          Accueil
        </Link>
        <Link
          to={"/about"}
          className={location.pathname === "/about" ? "underline" : ""}
        >
          A Propos
        </Link>
      </div>
    </div>
  );
};

export default header;
