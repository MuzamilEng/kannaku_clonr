import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";

import Image from 'next/image';
import doctor from "../../assets/img/doctors/rectangle-103-6@2x.png"

function ConfirmedBooking() {
  const [ratingValue, setRatingValue] = useState(4);
  return (
    <div className="row">
      <div className="col-12">
        <div className="row">
          <div className="col-7">
            <div className="row">
              <div className="col-4">
                <Image
                  height="207px"
                  width="171px"
                  src={doctor}
                  alt=""
                />
              </div>
              <div className="col-8 mt-2 mb-2">
                <h4>
                  <u>
                    <b>Dr ABCD al</b>
                  </u>
                </h4>
                <small>General Physician</small>
                <div>20 Ajah road, LAgos</div>
                <div className="row">
                  <div className="col-6">
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
                <small>
                  New Patient Appointments. Also Offers Video Visits. Highly
                  recommended. Excelellent wait time
                </small>
              </div>
            </div>
          </div>
          <div className="col-2"></div>
          <div className="col-3">
            <h3 className="text-black fw-bold">Time Slot</h3>
            <button
              className="btn text-white mb-2"
              type="button"
              style={{ backgroundColor: "green" }}
            >
              9:00
            </button>

            <h3 className="text-black fw-bold">
              <u>Date</u>
            </h3>
            <p className="fs-5">Saturday, May 8 2022</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-5">
            <button className=" bg-dark text-white fs-4 p-2 m-2" type="button">
              Appointment Reason
            </button>
          </div>
        </div>
        <div className="row">
            <p className="fs-5">Major area: Eye</p>
            <p className="fs-5">Type of appointment booking: Online Video Call</p>
            <p className="fs-5">Amount Paid: $50</p>
            <p className="fs-5">Doctor Confirmation: Awaiting Doctor COnfirmation</p>
        </div>
      </div>
    </div>
  );
}

export default ConfirmedBooking;
