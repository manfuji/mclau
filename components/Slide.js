import slide1 from "../public/pictures/madalyn.jpg";
import slide2 from "../public/pictures/Hero.jpg";
import slide3 from "../public/pictures/icecream.jpg";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
function Slide() {
  return (
    <div>
      <div>
        <div className="container-fluid">
          <div className="row title" style={{ marginBottom: "20px" }}>
            <div className="col-sm-12 btn btn-warning">
              How To Use Bootstrap Carousel In ReactJS
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <Carousel interval={600} keyboard={false} pauseOnHover={true}>
            <Carousel.Item style={{ height: "300px" }}>
              <Image
                style={{ height: "300px" }}
                className="d-block w-100"
                src={slide1}
                alt="slide"
              />

              <Carousel.Caption>
                <h3>First Demo </h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: "300px" }}>
              <Image
                style={{ height: "300px" }}
                className="d-block w-100"
                src={slide2}
                alt="slide"
              />

              <Carousel.Caption>
                <h3>Second Demo</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: "300px" }}>
              <Image
                style={{ height: "300px" }}
                className="d-block w-100"
                src={slide3}
                alt="slide"
              />

              <Carousel.Caption>
                <h3>Third Demo</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Slide;
