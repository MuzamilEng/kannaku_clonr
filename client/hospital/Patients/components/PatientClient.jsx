import React from "react";

function PatientClient() {
  return (
    <div className="col-6 p-2" >
      <div className="row rounded p-2 m-1" style={{ backgroundColor: "#CBEDEF" }}>
        <div className="col-1">
          {/* <img src="" alt="" /> */}
        </div>
        <div className="col-6">
          <h4>James S.</h4>
          <span>Male</span>
        </div>
        <div className="col-5">
          <span>12221122</span>
          <span>+627687689786</span>
        </div>
      </div>
    </div>
  );
}

export default PatientClient;
