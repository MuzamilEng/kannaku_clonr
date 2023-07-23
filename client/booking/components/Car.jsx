import React, { useState } from "react";
import Link from "next/link";
import RatingComponent from "./RatingComponent";
import Image from "next/image";

function Car({ img, name, location, rating, price, link }) {
  return (
    <div className="row p-2 m-2" style={{ backgroundColor: "white" }}>
      <div className="col-5">
        <Link href={link}>
          <a>
            <Image layout="responsive"  src={img} alt="" />
          </a>
        </Link>
      </div>
      <div className="col-7">
        
        <div className="row justify-content-center">
          <div className="col">
            <i
              className="fa fa-user ms-2"
              style={{ color: "gray" }}
              aria-hidden="true"
            ></i> 5
          </div>
          <div className="col">
             Mileage
          </div>
          <div className="col">
            <i
              className="fa fa-briefcase ms-2"
              style={{ color: "gray" }}
              aria-hidden="true"
            ></i> 2
          </div>
          <div className="col-5">
            <i
              className="fa fa-cog ms-2"
              style={{ color: "gray" }}
              aria-hidden="true"
            ></i>Auto Transmission
          </div>
         
        </div>
        <p className="text-blue"><b>Included in the price:</b></p>
        <div className="row mb-3 ">
          <div className="col">
            <i className="fa fa-check text-success"/> Free Cancellation <br />
            <i className="fa fa-check text-success"/> Price Guarentee <br />
            <i className="fa fa-check text-success"/> Theft Protection
          </div>
          <div className="col">
            <i className="fa fa-check text-success"/> Instantly confirmed <br />
            <i className="fa fa-check text-success"/> Third party Liablility <br />
            <i className="fa fa-check text-success"/> Damage Waiver
          </div>
        </div>
        <p>
          <span
            style={{ backgroundColor: "green", color: "white" }}
            className="rounded p-1 me-2"
          >
            4.5
          </span>
          <b>Excellent</b>
          {"(245 reviews)"}
        </p>
        
      </div>
     
    </div>
  );
}

export default Car;
