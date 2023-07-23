import React from "react";
import { Carousel } from "react-bootstrap";

function banner() {
 

  return (
    <div className="row">
      <div className="banner col-md-12">
         
        <Carousel prevLabel="">
          <Carousel.Item>
            <div className="row pt-5 mt-5">
              <div className="col-md-1"></div>
              <div className="col-md-8 col-12">
                <h1 className="display-4 fw-bold mt-3 text-white">
                  Your <span style={{ color: "red" }}>Food</span> Delivered to
                  your door.
                </h1>
              </div>
            </div>
            <div className="row pt-4 mt-3">
              <div className="col-md-1"></div>
              <div className="col-md-6 col-12">
                <p className="fs-5 text-white pt-5 mt-5">
                  Set exact location to find the closest rider near you.
                </p>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="row pt-5 mt-5">
              <div className="col-md-1"></div>
              <div className="col-md-8 col-12">
                <h1 className="display-4 fw-bold mt-3 text-white">
                  Your <span style={{ color: "red" }}>Food</span> Delivered to
                  your door.
                </h1>
              </div>
            </div>
            <div className="row pt-4 mt-3">
              <div className="col-md-1"></div>
              <div className="col-md-6 col-12">
                <p className="fs-5 text-white pt-5 mt-5">
                  Set exact location to find the closest rider near you.
                </p>
              </div>
            </div>
          </Carousel.Item>

          
        </Carousel>
      </div>
    </div>
  );
}

export default banner;
