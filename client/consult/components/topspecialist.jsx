import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import Image from "next/image";
import insurance from "../../assets/img/insurance/2-450x420.png";

function Topspecialist() {
  const [ratingValue, setRatingValue] = useState(4);
  return (
    <div className="bg-white p-4 ms-2 me-2 rounded">
      <div className="row">
        <div className="col-4">
          <Image
            style={{ height: "162px", width: "136px" }}
            src={insurance}
            alt=""
          />
        </div>
        <div className="col-8">
          <h4>Dr. Rajesh L. Pathni</h4>
          <p>Dermatologist</p>
          <p>12 Years of Exprience</p>
          <div className="row">
            <div className="col-8">
              <Rating
                name="Rating Label"
                value={ratingValue}
                onChange={(event, newValue) => {
                  setRatingValue(newValue);
                }}
              />
            </div>
            <div className="col-4">4 (1323)</div>
          </div>

          <div className="row">
            <div className="col-7">
              <p>1200 Consults done</p>
            </div>
            <div className="col-2">
              <i
                className="fa fa-location"
                style={{ color: "red" }}
                aria-hidden="true"
              ></i>
            </div>
            <div className="col-3">
              <p>
                <b>2KM</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topspecialist;
