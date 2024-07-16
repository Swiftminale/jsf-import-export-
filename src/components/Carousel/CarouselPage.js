import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img0 from "../../assets/img/logo/image.png";
import img1 from "../../assets/img/img2.jpg";
import img2 from "../../assets/img/img1.jpg";
import img3 from "../../assets/img/img4.jpg";
import "./CarouselPage.css";

function CarouselPage() {
  return (
    <Carousel>
      <Carousel.Item className="carousel-img">
        <img src={img0} alt="First slide" />
        <Carousel.Caption className="blur-background">
          <h3 className="text-dark">Beyond Your Imagination</h3>
          <p className="text-dark">
            Faster Better and More Reliable Poultry Feed Production
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-img">
        <img src={img1} alt="Second slide" />
        <Carousel.Caption className="blur-background">
          <h3 className="text-dark">Premium Poultry Nutrition</h3>
          <p className="text-dark">
            "Ensuring your flock's health with top-quality chicken feed."
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-img">
        <img src={img2} alt="Third slide" />
        <Carousel.Caption className="blur-background">
          <h3 className="text-dark">Trusted Supply, Quality Care</h3>
          <p className="text-dark">
            "Reliable imports for exceptional poultry care."
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-img">
        <img src={img3} alt="Fourth slide" />
        <Carousel.Caption className="blur-background">
          <h3 className="text-dark">Elevate Your Poultry Farming</h3>
          <p className="text-dark">
            "Providing essential materials for thriving chickens."
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselPage;
