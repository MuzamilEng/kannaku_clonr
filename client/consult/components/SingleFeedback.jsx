import React, { useState } from "react";

import Rating from "@material-ui/lab/Rating";
import Image from 'next/image'
import thumbup from "../../assets/img/doctors/thumb-up.png"
import thumbdown from "../../assets/img/doctors/thumb-down.png"
import doctor from "../../assets/img/doctors/rectangle-103-6@2x.png"

function SingleFeedback() {
  const [ratingValue, setRatingValue] = useState(4);
  return (
    <div className="row pt-5">
      <div className="col-4">
        <div className="row">
          <div className="col-4">
            <Image
              src={doctor}
              height="151"
              width="151"
              alt=""
            />
          </div>
          <div className="col-8">
            <h4 style={{ color: "#1A66D8" }}>Abraham Patient</h4>
            <h4>32 Review</h4>
            <div className="row">
              <div className="col-2">
                <Image
                  src={thumbup}
                  height="28"
                  width="30"
                  alt=""
                />
              </div>
              <div className="col-4 pt-2">
                <b style={{ color: "green" }}>9</b>
              </div>
              <div className="col-2">
                <Image
                  src={thumbdown}
                  height="28"
                  width="30"
                  alt=""
                />
              </div>
              <div className="col-4 pt-2">
                <b style={{ color: "red" }}>3</b>
              </div>
            </div>
            <h5>Member Since: 1997</h5>
          </div>
        </div>
      </div>

      <div className="col-8">
        <Rating
          name="Rating Label"
          value={ratingValue}
          onChange={(event, newValue) => {
            setRatingValue(newValue);
          }}
        />
        <p className="text-black fs-5">
          Like the review itself, the response is short and simple. Adam thanked
          the customer for his honesty, but also expressed his eagerness to
          investigate the matter further so that the restaurant can deliver a
          better dining experience next time.
        </p>
      </div>
    </div>
  );
}

export default SingleFeedback;
