import React from "react";
import FeatherIcon from 'feather-icons-react';

function Plan() {
  return (
    <div className="col-12 p-2 m-2 rounded align-items-center justify-content-center" style={{ border: "1px #14BEF0 solid" }} >
      <div className="row">
        <div className="col-11">
          <b>James s.</b>
        </div>
        <div className="col-1">
          <button className="btn"><FeatherIcon icon="more-vertical"/></button>
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          <div className="row">
            <div className="col-1"><input type="checkbox" /></div>
            <div className="col-10">
              <b>Procedures</b>
            </div>
          </div>
        </div>
        <div className="col-2"><b>Cost {"($)"}</b></div>
        <div className="col-2"><b>Discount</b></div>
        <div className="col-2">Total</div>
        <div className="col-3"><b>Notes</b></div>
      </div>

      <div className="row">
        <div className="col-3">
          <div className="row">
            <div className="col-1"><input type="checkbox" /></div>
            <div className="col-10">
              Anti Acne treatments
            </div>
          </div>
        </div>
        <div className="col-2">200</div>
        <div className="col-2">0.00{"(0%)"}</div>
        <div className="col-2">200</div>
        <div className="col-3">-</div>
      </div>
      <div className="row">
        <div className="col-3">
          <div className="row">
            <div className="col-1"><input type="checkbox" /></div>
            <div className="col-10">
              Anti Acne treatments
            </div>
          </div>
        </div>
        <div className="col-2">200</div>
        <div className="col-2">0.00{"(0%)"}</div>
        <div className="col-2">200</div>
        <div className="col-3">-</div>
      </div>
      
      <br />
      <div className="row">
        <div className="col-8"><hr /></div>
      </div>

      <div className="row">
        <div className="col-7">
          <b>Total</b>
        </div>
        <div className="col-2">
          <b>$ 400</b>
        </div>
        <div className="col-3">
          <span>Planned by jamhur Ghafari</span>
        </div>
      </div>
     
    </div>
  );
}

export default Plan;
