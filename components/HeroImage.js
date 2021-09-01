import Image from "next/image";
import dish from "../public/pictures/drinks.jpg";
function HeroImage() {
  return (
    <div>
      <div
        className="card bg-dark text-white align-items-center"
        style={{ height: "300px", width: "800px" }}
      >
        <Image
          src={dish}
          className="card-img-top"
          alt="..."
          layout="fixed"
          height="300"
          width="800"
        />
        <div className="card-img-overlay">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="btn btn-primary">
            Card button
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
