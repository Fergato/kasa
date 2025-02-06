import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const error = () => {
  return (
    <div>
      <Header />
      <div className="error-body">
        <h1 className="error-title">404</h1>
        <p className="oups">
          Oups! La page que vous demandez n&apos;existe pas.
        </p>
        <Link to={"/"} className="link-accueil">
          Retournez sur la page d&apos;accueil
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default error;
