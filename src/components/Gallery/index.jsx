import { homeList } from "../../data/db";
import Card from "../Card";

const gallery = () => {
  return (
    <div className="gallery">
      <ul className="card-gallery">
        {homeList.map(({ id, cover, title }) => (
          <div key={id}>
            <Card cover={cover} title={title} id={id} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default gallery;
