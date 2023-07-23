import React from "react";
import { Carousel } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

function consult({ doctor }) {
  return (
    <>
      <div className="row bg-white rounded-top">
        <Link href="/consult/consult-doctor">
          <a>
            <h2
              style={{ textAlign: "center" }}
              className="fw-bold text-black mt-3"
            >
              {doctor.doctor_title}
            </h2>
            <Carousel prevLabel="" style={{ color: "black" }}>
              {doctor.doctor_images.map((url) => {
                return (
                  <Carousel.Item key={url}>
                    <Image
                      className="d-block w-100 img-fluid"
                      src={url}
                      alt="First slide"
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </a>
        </Link>
      </div>

      <div className="row bg-white p-2">
        <Link href="/consult-doctor">
          <a>
            <div className="col-12">
              <div className="row text-white bg-black p-3 rounded">
                <span className="fs-5">
                  Total Consultants Online: {doctor.total_consultants_online}
                </span>
                <span className="fs-5">
                  Total Consultants: {doctor.total_consultants}
                </span>
                <span className="fs-5">
                  Average Exprience: {doctor.average_exprience}
                </span>
                <span className="fs-5">
                  Total Consultations: {doctor.total_consultations}
                </span>
              </div>
            </div>
          </a>
        </Link>
      </div>

      <Link href="/consult/consult-doctor">
        <a>
          <div className="row bg-white p-2 rounded-bottom">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="row">
                <button className="btn btn-danger fs-5">Consult Now</button>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </a>
      </Link>
    </>
  );
}

export default consult;
