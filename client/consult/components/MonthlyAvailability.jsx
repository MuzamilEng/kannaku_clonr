import React, { useState } from "react";
import TableRow from "./TableRow";
import Link from "next/link";
import Rating from "@material-ui/lab/Rating";
import { Table } from "react-bootstrap";
import Image from 'next/image';
import doctor from "../../assets/img/doctors/rectangle-103-6@2x.png";

function MonthlyAvailability({ handleShow }) {
  const [ratingValue, setRatingValue] = useState(4);
  const [isliked, setisliked] = useState(false);
  const like = () =>{
    setisliked(!isliked)
}
  return (
    <div
      className="row mb-3 ms-2"
      style={{ backgroundColor: "rgba(196, 196, 196, 0.17)" }}
    >
      <div className="col-5">
        <div className="row">
          <div className="col-4">
            <button className="btn" onClick={like}><i className={`${isliked?"text-red":"text-gray"} fa fa-heart`} aria-hidden="true"></i></button>
            <Link href="/consultant-detail">
              <Image
                height="144px"
                width="145px"
                src={doctor}
                alt=""
              />
            </Link>
            <div className="row">
              <div className="col-3"></div>
              <div className="col-3">
                <i
                  className="fa fa-map-marker"
                  style={{ color: "red" }}
                  aria-hidden="true"
                ></i>
              </div>
              <div className="col-6">
                <p>2KM</p>
              </div>
            </div>
          </div>
          <div className="col-8 mt-2 mb-2">
            <h4>
              <u>
                <b>Dr ABCD al</b>
              </u>
            </h4>
            <small>General Physician</small>
            <div>20 Ajah road, LAgos</div>
            <div className="row">
              <div className="col-6">
                <Rating
                  name="Rating Label"
                  value={ratingValue}
                  onChange={(event, newValue) => {
                    setRatingValue(newValue);
                  }}
                />
              </div>
              <div className="col-4">4 (1323)</div>
            </div>
            <small>
              New Patient Appointments. Also Offers Video Visits. Highly
              recommended. Excelellent wait time
            </small>
            <p>Check if your HMO is accepted</p>
          </div>
        </div>
      </div>

      <div className="col-7">
        <Table responsive>
          <tbody>
            <TableRow handleShow={handleShow} />
            <TableRow handleShow={handleShow} />
            <TableRow handleShow={handleShow} />
            <TableRow handleShow={handleShow} />
          </tbody>
        </Table>
        <div className="row text-center">
            <small>
            <u>View all availabilty</u>
            </small>
        </div>
        
      </div>
    </div>
  );
}

export default MonthlyAvailability;
