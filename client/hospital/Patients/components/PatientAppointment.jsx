import React from "react";
import FeatherIcon from 'feather-icons-react';

function PatientAppointment() {
  return (
    <div className="col-12 p-2" >
      <div className="row rounded p-2 m-1 align-items-center justify-content-center" style={{ border: "1px #14BEF0 solid" }}>
        <div className="col-1">
          <img src="" alt="" />
        </div>
        <div className="col-3">
          <span>19 may 2022, 05:00PM</span><br />
          <span><b>Scaling and teeth ...</b></span>
        </div>
        <div className="col-3">
          <h4>James S.</h4>
          <span>Male, 13 years</span>
        </div>
        <div className="col-2">
          <span>12221122</span>
        </div>
        <div className="col-2">
          <span style={{color: "#14BEF0"}}>Engaged</span>
        </div>
        <div className="col-1">
          <FeatherIcon icon="more-vertical"/>
        </div>
      </div>
    </div>
  );
}

export default PatientAppointment;
