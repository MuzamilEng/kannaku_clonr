import React from "react";
import { Carousel, FormControl, InputGroup } from "react-bootstrap";

function banner() {
  return (
    <div className="row">
      <div className="banner col-md-12">
        <Carousel prevLabel="">
          
          <Carousel.Item>
            <div className="row pt-5 mt-5">
              <div className="col-md-1"></div>
              <div className="col-11 ps-5">
                <h1 className="display-4 fw-bold mt-3 text-white">
                  Your <span style={{ color: "red" }}>Parcel</span> Delivered to <br />
                  your door.
                </h1>
                <p className="fs-5 text-white pt-2">
                  Set exact location to find the closest rider near you.
                </p>
              </div>
            </div>
          </Carousel.Item>
          
          <Carousel.Item>
            <div className="row pt-5 mt-5">
              <div className="col-md-1"></div>
              <div className="col-11 ps-5">
                <h1 className="display-4 fw-bold mt-3 text-white">
                  Your <span style={{ color: "red" }}>Parcel</span> Delivered to <br />
                  your door.
                </h1>
                <p className="fs-5 text-white pt-2">
                  Set exact location to find the closest rider near you.
                </p>
              </div>
            </div>
          </Carousel.Item>
          

        </Carousel>

        <div className="row mt-5 ms-1">
          <div className="col-md-6 col-sm-12">
            <div className="row ms-5 ps-5 mt-4">
              <div className="input-group mb-3" >
                <span className="input-group-text pe-5" style={{ borderRadius: "100px", marginRight: "-30px" }} id="basic-addon1"><i className="fa fa-map-marker" style={{ color: "red" }} aria-hidden="true"></i></span>
                <input type="text" className="form-control" style={{ padding: "30px" }} placeholder="Enter your delivery address" aria-label="Enter your delivery address" aria-describedby="basic-addon1"></input>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="row mt-4">
              <button className="btn" style={{ padding: "18px", borderRadius: "100px", marginLeft: "-35px", paddinLeft: "-30px", backgroundColor: "red", color: "white" }}>FIND DELIVERY RIDER</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default banner;
