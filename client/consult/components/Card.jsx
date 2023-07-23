import React from "react";
import Link from "next/link";
import Image from 'next/image';
import cupcake from "../../assets/img/doctors/cupcake.png";

function Card({ title, description, buttontxt, action }) {
  return (
    <div>
      <div
        className="row bg-white mb-3 ms-2 p-2"
        style={{ border: "2px solid #D3DDE7" }}
      >
        <div className="col-4">
          <Image className="img-fluid" src={cupcake} alt="" />
        </div>
        <div className="col-8">
          <h4 className="fw-bold mb-2" >{title}</h4>
          <p className="mb-2" style={{height:"65px"}}>
           {description}
          </p>
          <Link href="/doctor/health-care-providers"><button className="btn btn-danger mb-1" onClick={action}>{buttontxt}</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
