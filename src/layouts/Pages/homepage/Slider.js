import React from "react";
import { Carousel } from "react-bootstrap";
import "../../../scss/slider.scss";

const Slider = () => {
  return (
    <div className="mt-5">
      <Carousel>
        <Carousel.Item interval={5000} className="slide-1">
          <Carousel.Caption>
            <div className="carousel__text">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000} className="slide-2">
          <Carousel.Caption>
            <div className="carousel__text">
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000} className="slide-3">
          <Carousel.Caption>
            <div className="carousel__text">
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
