import React from "react";
import { Carousel } from "react-bootstrap";

function banner({ bookingtype }) {
  return (
    <div className="row">
      <div className="banner col-md-12">
        <Carousel prevLabel="" className="pt-5 mt-5">
          <Carousel.Item>
            <div className="row">
              <h1 className="display-5 fw-bold mt-3 text-white text-center">
                Your <span style={{ color: "red" }}>{bookingtype}</span> booking
                made easy.
              </h1>
            </div>
          </Carousel.Item>
          
          <Carousel.Item>
            <div className="row">
              <h1 className="display-5 fw-bold mt-3 text-white text-center">
                Your <span style={{ color: "red" }}>{bookingtype}</span> booking
                made easy.
              </h1>
            </div>
          </Carousel.Item>

         
        </Carousel>
      </div>
    </div>
  );
}

export default banner;
