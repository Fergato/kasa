import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { homeList } from "../../data/db";
import Header from "../../components/Header";
import Slideshow from "../../components/Slideshow";
import Collapse from "../../components/Collapse";
import Footer from "../../components/Footer";
import Informations from "../../components/Informations";

const Logement = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const getLogementById = (id) => {
    return homeList.find((house) => house.id === id);
  };

  const house = getLogementById(id);

  useEffect(() => {
    if (!house) {
      navigate("/Error");
    }
  }, [house, navigate]);

  if (!house) {
    return null;
  }

  return (
    <div className="logement">
      <Header />
      <Slideshow pictures={house.pictures} />
      <Informations house={house} />
      <div className="logement-collapse">
        <div className="logement-description">
          <Collapse title="description" content={house.description} index="0" />
        </div>
        <div className="logement-equipments">
          <Collapse
            title="Équipements"
            content={
              <ul>
                {house.equipments.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            }
            index="0"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Logement;
