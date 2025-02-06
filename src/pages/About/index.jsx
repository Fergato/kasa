import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import { aboutList } from "../../data/valeurs";
import Collapse from "../../components/Collapse";

const about = () => {
  return (
    <div>
      <Header />
      <Banner />
      <div className="liste-valeurs">
        {aboutList.map((item, index) => (
          <div className={"panel-about"} key={`${item.title}-${index}`}>
            <Collapse title={item.title} content={item.content} index={index} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default about;
