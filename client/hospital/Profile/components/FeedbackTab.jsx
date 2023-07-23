import React, { useState } from "react";

import Rating from "@material-ui/lab/Rating";

function FeedbackTab() {
  const [ratingValue, setRatingValue] = useState(5);
  return (
    <div className="row pt-5 ps-3 pe-3">
      <div className="col-5">
       <p><b>St. Imam Bonjo, Denpasar</b></p>
       <h6 style={{color:"#14BEF0"}}> <b>Scaling and Teeth Whitening</b> </h6>
       <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget facilisis tincidunt sed ante mauris, mauris, nulla.”</p>
      </div>

      <div className="col-4">
        <Rating
            name="Rating Label"
            value={ratingValue}
            onChange={(event, newValue) => {
              setRatingValue(newValue);
            }}
        /> <span><b>5.0</b></span>
        <p>Jun 10, 2021 - Jun 25, 2021</p>
      </div>

      <div className="col-3">
       <h4 style={{color: "#14BEF0"}}>$1000</h4>
       <p>/Appointment</p>
      </div>
      <br />
      <hr />
    </div>
  );
}

export default FeedbackTab;
