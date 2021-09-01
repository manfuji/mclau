import slide1 from "../public/pictures/HA PO DR.jpg";
import slide2 from "../public/pictures/jolof n chik.jpg";
import slide3 from "../public/pictures/jolon n grill.jpg";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

function Slides() {
  return (
    <div>
      <div className="container-fluid">
        <Carousel fade>
          <Carousel.Item interval={5000} style={{ height: "40%" }}>
            <Image
              style={{ height: "400px" }}
              className="d-block w-100"
              src={slide3}
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item interval={5000} style={{ height: "20%" }}>
            <Image
              style={{ height: "400px" }}
              className="d-block w-100"
              src={slide1}
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item interval={5000} style={{ height: "20%" }}>
            <Image
              style={{ height: "400px" }}
              className="d-block w-100"
              alt=""
              src={slide2}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Slides;
