import React, { useState } from "react";
import Link from "next/link";
import RatingComponent from "./RatingComponent";
import Image from "next/image";

function Product({ img, name, location, rating, price, link }) {
  return (
    <div className="row p-3 rounded mb-4 me-2 ms-1" style={{ backgroundColor: "white" }}>
      <div className="col-4">
        <Link href={link}>
          <a>
            <Image layout="responsive" className="rounded" src={img} alt="" />
          </a>
        </Link>
      </div>
      <div className="col-6">
        <h6>
          <b>{name}</b>
        </h6>
        <div className="row justify-content-center">
          <RatingComponent rating={rating} />
          <i
            className="fa fa-map-marker ms-2"
            style={{ color: "gray" }}
            aria-hidden="true"
          ></i>
          <span>{location}</span>
        </div>
       
         <p> <span className="rounded border">couple friendly</span></p>
        <p>
          <span
            style={{ backgroundColor: "green", color: "white" }}
            className="rounded p-1 me-2"
          >
            8.2
          </span>
          <b>Excellent</b>
          {"(245 reviews)"}
        </p>
        <p style={{ color: "red" }}>Last booked - 18 hours ago</p>
      </div>
      <div className="col-2">
        <h6 className="text-end" style={{ color: "green" }}>
          16% off!
        </h6>
        <h6 className="text-end">
          <del>$250</del>
        </h6>
        <h4 className="text-end">
          <b>
            $ <span>{price}</span>
          </b>
        </h4>
        <p className="text-end">1 Room/Night</p>
        <button className="btn btn-primary" style={{ backgroundColor: "blue" }}>
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Product;
