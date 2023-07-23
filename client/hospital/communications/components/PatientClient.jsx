import React from "react";

function PatientClient() {
  return (
    <div className="col-6 mb-2 mt-2 p-2 rounded" style={{ backgroundColor: "#CBEDEF" }}>
      <div className="row">
        <div className="col-1">
          <img src="" alt="" />
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
