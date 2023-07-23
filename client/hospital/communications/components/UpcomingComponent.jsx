import React from "react";
import FeatherIcon from 'feather-icons-react';

function UpcomingComponent() {
  return (
    <div className="col-12 p-2" >
      <div className="row rounded p-2 m-1 align-items-center justify-content-center" style={{ border: "1px #14BEF0 solid" }}>
        <div className="col-1">
          <img src="" alt="" />
        </div>
        <div className="col-3">
          <h4>James S.</h4>
          <span>Male, 13 years</span>
        </div>
        <div className="col-4">
          <span>17 May 2022 07:00PM</span>
        </div>
        <div className="col-3">
          <span >1222122</span>
        </div>
        <div className="col-1">
          <FeatherIcon icon="more-vertical"/>
        </div>
      </div>
    </div>
  );
}

export default UpcomingComponent;
