import React from "react";
import FeatherIcon from 'feather-icons-react';

function LedgerComponent() {
  return (
    <div className="col-12 p-2" >
      <div className="row rounded p-2 m-1 align-items-center justify-content-center" style={{ border: "1px #14BEF0 solid" }}>
        <div className="col-6">
          <div className="row">
          <div className="col-4"><span style={{color: "#14BEF0"}}>INV00001</span></div>
          <div className="col-5">Anti Acne Treatments</div>
          <div className="col-3">Invoices</div>
          </div>
        </div>
        <div className="col-5">
          <div className="row">
            <div className="col-4"><b>Balance</b></div>
            <div className="col-4"><b>Total</b></div>
            <div className="col-4"><b>Paid</b></div>
          </div>

          <div className="row">
            <div className="col-4">200</div>
            <div className="col-4">0.00</div>
            <div className="col-4">0.00</div>
          </div>
        </div>

        
        <div className="col-1">
          <button className="btn"><FeatherIcon icon="more-vertical"/></button>
        </div>
      </div>
    </div>
  );
}

export default LedgerComponent;
