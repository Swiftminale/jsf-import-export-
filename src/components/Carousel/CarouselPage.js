import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/img/Little-Feed-Co.jpg";
import img2 from "../../assets/img/poultry-feed-production-buisness.jpg";
import img3 from "../../assets/img/png-clipart-chicken-duck-poultry-fodder-farm-chicken-coop-food-company.png";
import "./CarouselPage.css";
function CarouselPage() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          style={{ height: "90vh" }}
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption className="blur-background">
          <h3 className="text-dark">First slide label</h3>
          <p className="text-dark">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "90vh" }}
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption className="blur-background">
          <h3 className="text-dark">Second slide label</h3>
          <p className="text-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "90vh" }}
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption className="blur-background">
          <h3 className="text-dark">Third slide label</h3>
          <p className="text-dark">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselPage;
