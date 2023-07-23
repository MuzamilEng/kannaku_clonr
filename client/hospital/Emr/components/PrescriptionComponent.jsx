import React from "react";
import FeatherIcon from 'feather-icons-react';

function PrescriptionComponent() {
  return (
    <div className="col-12 p-2 m-2 rounded align-items-center justify-content-center" style={{ border: "1px #14BEF0 solid" }} >
      <div className="row">
        <div className="col-11">
          <b>James s.</b>
        </div>
        <div className="col-1">
          <button className="btn"><FeatherIcon icon="more-vertical" /></button>
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          <div className="row">
            <div className="col-1"><input type="checkbox" /></div>
            <div className="col-10">
              <b>Drugs</b>
            </div>
          </div>
        </div>
        <div className="col-2"><b>Frequency </b></div>
        <div className="col-2"><b>Duration</b></div>
        <div className="col-2">Intruction</div>
      </div>

      <div className="row">
        <div className="col-3">
          <div className="row">
            <div className="col-1"><input type="checkbox" /></div>
            <div className="col-10">
              Aqua Astringent
            </div>
          </div>
        </div>
        <div className="col-2">2/1</div>
        <div className="col-2">1 week</div>
        <div className="col-2">200</div>
      </div>

      <div className="row">
        <div className="col-3">
          <div className="row">
            <div className="col-1"><input type="checkbox" /></div>
            <div className="col-10">
              Aqua Glycerin
            </div>
          </div>
        </div>
        <div className="col-2">2/1</div>
        <div className="col-2">1 week</div>
        <div className="col-2">200</div>
      </div>

      <br />
      <hr />

      <div className="row ms-3">
        <span>Planned by jamhur Ghafari</span>
      </div>

    </div>
  );
}

export default PrescriptionComponent;
