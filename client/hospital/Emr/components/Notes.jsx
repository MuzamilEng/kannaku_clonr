import React from "react";
import FeatherIcon from 'feather-icons-react';

function Notes() {
  return (
    <div className="col-12 p-2" >
      <div className="row rounded p-2 m-1 align-items-center justify-content-center" style={{ border: "1px #14BEF0 solid" }}>
        <div className="col-3">
          <b>James s.</b>
        </div>
        <div className="col-3">
          <span>Male, 13 years</span>
        </div>
        <div className="col-5">
          <span>Noted by Jamhur Ghifari</span>
          
        </div>
      
        <div className="col-1">
          <button className="btn"><FeatherIcon icon="more-vertical"/></button>
        </div>
      </div>
    </div>
  );
}

export default Notes;
