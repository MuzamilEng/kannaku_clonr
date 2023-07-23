import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import Image from 'next/image'
import doctor from "../../assets/img/doctors/rectangle-103-6@2x.png";

import { Dropdown, InputGroup, DropdownButton, Form } from "react-bootstrap";

function BookingConfirmation({openConfirmed}) {
  const [ratingValue, setRatingValue] = useState(4);
  return (
    <div className="row">
      <div className="col-12">
        <div className="row">
          <div className="col-7">
            <div className="row">
              <div className="col-4">
                <Image
                  height="207px"
                  width="171px"
                  src={doctor}
                  alt=""
                />
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
              </div>
            </div>
          </div>
          <div className="col-2"></div>
          <div className="col-3">
            <h3 className="text-black fw-bold">Time Slot</h3>
            <button
              className="btn text-white mb-2"
              type="button"
              style={{ backgroundColor: "green" }}
            >
              9:00
            </button>

            <h3 className="text-black fw-bold">
              <u>Date</u>
            </h3>
            <p className="fs-5">Saturday, May 8 2022</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-5">
            <button className=" bg-dark text-white fs-4 p-2 m-2" type="button">
              Appointment Reason
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-5">
            <InputGroup className="">
              <InputGroup.Text id="basic-addon1">
                <i className="fa fa-filter" aria-hidden="true"></i>
              </InputGroup.Text>
              <DropdownButton
                variant="outline-secondary"
                title="Select Main Focus Area"
                id="basic-addon1"
                className="w-full"
              >
                <Dropdown.Item href="#">Eye</Dropdown.Item>
                <Dropdown.Item href="#">Ear</Dropdown.Item>
                <Dropdown.Item href="#">Mouth</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </div>

          <div className="col-4">
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <i className="fa fa-filter" aria-hidden="true"></i>
              </InputGroup.Text>
              <DropdownButton
                variant="outline-secondary"
                title="Appointment Type"
                id="basic-addon1"
                className="w-full"
              >
                <Dropdown.Item href="#">Online Video Call</Dropdown.Item>
                <Dropdown.Item href="#">Video Visit</Dropdown.Item>
                <Dropdown.Item href="#">Physical Visit</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
          <Form.Control
            as="textarea"
            placeholder="Enter brief descriptions of symptoms"
            style={{ height: '266px' }}
          />
          </div>
          <div className="col-4">
            <div className="row mr-3">
              <button className=" bg-dark text-white fs-4 p-2 m-2" type="button">
                Payment
              </button>
            </div>
            <div className="row">
              <div className="col-7">
                <button className=" bg-dark text-white fs-5 ps-3  pe-3 pt-2 pb-2 mt-2" type="button">
                  Video call
                </button>
              </div>
              <div className="col-5">
                <button className="text-white fs-4 p-2 m-2" style={{backgroundColor:"#FFD600"}} type="button">
                  $50
                </button>
              </div>
            </div>
            <div className="row mt-5 mr-3">
              <button className=" bg-dark text-white fs-4 p-2 m-2" type="button" onClick={openConfirmed}>
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingConfirmation;
