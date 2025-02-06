import LogoBlanc from "../../assets/LogoBlanc.svg";
import ReactDOM from "react-dom";

const footer = () => {
  //Pour le sortir de la hiérarchie parent/enfant pour faciliter le SCSS
  return ReactDOM.createPortal(
    <footer className="footer">
      <img src={LogoBlanc} className="logoBlanc" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>,
    document.body
  );
};

export default footer;
