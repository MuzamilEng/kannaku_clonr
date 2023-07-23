import React from "react";
import FeatherIcon from 'feather-icons-react';

function CampaignComponent() {
  return (
    <div className="col-12 p-1" >
      <div className="row rounded p-2 m-1" style={{ border: "1px #14BEF0 solid" }}>
        
        <div className="col-3">
          <span><b>World Cancer Day</b></span><br />
          <span>18 may 2022 06:00PM</span>
        </div>
        <div className="col-3">
          <h5>Message:</h5>
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae nulla dolorum iure voluptatum placeat similique amet magnam aliquam. </span>
        </div>
        <div className="col-2">
          <span><b style={{color:"green"}}>SENT</b></span>
        </div>
        <div className="col-3">
          <span style={{color: "#14BEF0"}}> <b>See More</b> <FeatherIcon icon="chevron-right"/></span>
        </div>
        <div className="col-1">
          <FeatherIcon icon="more-vertical"/>
        </div>
      </div>
    </div>
  );
}

export default CampaignComponent;
