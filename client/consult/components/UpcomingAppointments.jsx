import React from "react";
import Image from 'next/image'
import doctor from "../../assets/img/doctors/rectangle-104@2x.png"
import timeicon from "../../assets/img/doctors/icon-time.png"
import videoimg from "../../assets/img/doctors/img-video.png"

function UpcomingAppointments() {
  return (
    <div
      className="row bg-white mb-3"
      style={{ border: "1px solid #B09A9A", color: "black" }}
    >
      <div className="col-9">
        <div
          className="row pt-4 pb-4 ps-2"
          style={{ backgroundColor: "rgba(196, 196, 196, 0.27)" }}
        >
          <div className="col-3">
            <Image
              layout="responsive"
              
              src={doctor}
              alt=""
            />
          </div>
          <div className="col-9">
            <h3>Dr. ADBVS ADBs</h3>
            <span>Dental Surgeon</span> <br />
            <span>
              <u>
                <b>Appointment Reason</b>
              </u>
            </span>
            <p>
              Dental stiching, Pains feeling in my teeth and need to remove all
              of them now
            </p>
          </div>
        </div>
      </div>

      <div className="col-3 pt-3 ps-2" style={{ border: "1px solid #B09A9A" }}>
        <div className="row">
          <div className="col-4">
            <Image
              height="18"
              width="18"
              src={timeicon}
              alt=""
            />
          </div>
          <div className="col-6">
            <small>
              <b>12:00PM</b>
            </small>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-4">
            <Image
              height="45"
              width="47"
              src={videoimg}
              alt=""
            />
          </div>
          <div className="col-6 mt-2">
            <small>
              <b>Video Call</b>
            </small>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-4"></div>
          <div className="col-6">
            <p style={{ color: "#01A951" }}>
              {" "}
              <b>$20.00</b>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingAppointments;
