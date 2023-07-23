import React from "react";
import { Form } from "react-bootstrap";
import Link from "next/link";

function SingleTrip() {
  return (
    <div className="row bg-white">
      <div className="col-1">
        <Form.Check type="radio" name="flight" id="flight" />
      </div>
      <div className="col-2">
        <span className="user-img">
          <img src="/src/assets/img/img-01.jpg" alt="" />
        </span>
        <span>
          <b>IndiGo</b>
        </span>
      </div>
      <div className="col-3">
        <span>23:00</span>
        <br />
        <span>Non Stop</span>
      </div>
      <div className="col-3">
        <span>18:15</span>
        <span>18h 55m</span>
      </div>
      <div className="col-3">
        <span>$980</span>
        <br />
        <Link href="/booking/flightconfirmdetails">Flight Details</Link>
      </div>
      <hr />
    </div>
  );
}

export default SingleTrip;
