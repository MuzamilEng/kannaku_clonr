import React from "react";
import FeatherIcon from 'feather-icons-react';

function PaymentsComponent() {
  return (
    <div className="col-12 p-2 m-2 rounded align-items-center justify-content-center" style={{ border: "1px #14BEF0 solid" }} >
      <div className="row p-2">
        <div className="col-11">
          <b style={{ color: "#14BEF0" }}>INV00000000000001</b><span> 13 may 2022</span>
        </div>
        <div className="col-1">
          <button className="btn"><FeatherIcon icon="more-vertical" /></button>
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          <b>Procedures</b>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-3"><b>Cost </b></div>
            <div className="col-3"><b>Discount</b></div>
            <div className="col-3"><b>Tax</b></div>
            <div className="col-3"><b>Total</b></div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          Anti Acne Treatments
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-3">200</div>
            <div className="col-3"><b>0.00</b></div>
            <div className="col-3"><b>0</b></div>
            <div className="col-3"><b>200</b></div>
          </div>
        </div>
        <div className="col-3">
          <span>Completed by jamhur Ghafari</span>
        </div>
      </div>
      <hr />
      <br />
      
      <div className="row">
        <div className="col-3">
          Anti Acne Treatments
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-3">200</div>
            <div className="col-3"><b>0.00</b></div>
            <div className="col-3"><b>0</b></div>
            <div className="col-3"><b>200</b></div>
          </div>
        </div>
        <div className="col-3">
          <span>Completed by jamhur Ghafari</span>
        </div>
      </div>
      <hr />
      <br />

      <div className="row">
        <div className="col-3"><b>Balance</b></div>
        <div className="col-3"><b>Total</b></div>
        <div className="col-3"><b>Paid</b></div>
      </div>
      <div className="row">
        <div className="col-3">200</div>
        <div className="col-3">0.00</div>
        <div className="col-3">0.00</div>
      </div>
      
    </div>
  );
}

export default PaymentsComponent;
