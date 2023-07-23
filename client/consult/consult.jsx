import React, { useState } from "react";
import Banner from "./components/banner";
import SearchArea from "./components/search_area";
import SortArea from "./components/sort_area";
import Footer from "./components/footer";
import Progress from "./components/progress";
import { Button, Modal, ProgressBar } from "react-bootstrap";
import Link from "next/link";
import { FormControl, InputGroup } from "react-bootstrap";
import UpcomingAppointments from "./components/UpcomingAppointments";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import Image from "next/image";
import check from "../assets/img/icons/check.png"
import chevronleft from "../assets/img/icons/chevron-left.png"
import cupcake from "../assets/img/doctors/cupcake.png"
import appointment from "../assets/img/doctors/appointment.png"
import FeatherIcon from 'feather-icons-react'

function Consult() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(10);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="main-wrapper">
      <Header />
      <Sidebar />

      <div className="page-wrapper">
        <div className="content container-fluid">
          <Banner />
          <SearchArea />
          <SortArea />

          <div className="row">
            <div className="col-12 doctor-body">
              <div className="row ms-1 mt-2">
                <div className="col-md-4 bg-white">
                  <div className="row">
                    <h3
                      className="text-black fw-bold pt-2"
                      style={{ textAlign: "center" }}
                    >
                      Your Wellness Guide
                    </h3>
                    <hr />
                    <div className="col-5" style={{ color: "#856AFF" }}>
                      <p className="mt-2">1 of 10 Completed</p>
                    </div>
                    <div className="col-6 mb-5 mt-2">
                      <ProgressBar
                        variant="success"
                        now={progress}
                        label={`${progress}%`}
                      />
                    </div>
                  </div>

                  <div
                    className="row bg-white mb-1"
                    style={{ border: "1px solid #B09A9A" }}
                  >
                    <div className="col-10" style={{ color: "#8AC924" }}>
                      <div
                        className="row pt-3 ps-2"
                        style={{ backgroundColor: "rgba(196, 196, 196, 0.27)" }}
                      >
                        <div className="col-2">
                          <Image
                            className="fa fa-check pt-1"
                            src={check}
                            layout='responsive'
                            alt=""
                          />
                        </div>
                        <div className="col-10">
                          <span
                            className="fw-bold fs-4 "
                            style={{ color: "#8AC924" }}
                          >
                            <del>Sign Up</del>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-2 pt-2"
                      style={{ border: "1px solid #B09A9A" }}
                    >
                      <button className="btn" type="button">
                        <FeatherIcon icon='chevron-down' />

                      </button>
                    </div>
                  </div>

                  <Progress action={handleShow} title="Dental Cleaning" />
                  <Progress action={handleShow} title="Skin Screaning" />
                  <Progress action={handleShow} title="Vision Check" />
                  <Progress action={handleShow} title="Blood Pressure" />
                  <Progress action={handleShow} title="Sugar Level" />
                  <Progress action={handleShow} title="BMI Test" />
                  <Progress action={handleShow} title="Hepitatis B tests" />
                  <Progress action={handleShow} title="Malaria Check-up" />
                </div>

                <div className="col-md-8">

                  <div className="row">
                    <div className="col-6">
                      <div className="row bg-white ms-2 p-2" style={{ border: "2px solid #D3DDE7" }} >
                        <div className="col-4">
                          <Image layout="responsive" src={cupcake} alt="" />
                        </div>
                        <div className="col-8">
                          <h5 className="fw-bold mb-2">
                            Specialists Doctors
                          </h5>
                          <p className="mb-2">
                            <small>Video Consultation with top <b> <u>specialists</u></b> in less than <b> <u>N500</u> </b> per session
                            </small>
                          </p>
                          <div className="row">
                            <button className="btn btn-danger">
                              Book an Appointment
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-6">
                      <div
                        className="row bg-white ms-2 p-2"
                        style={{ border: "2px solid #D3DDE7" }}
                      >
                        <div className="col-4">
                          <Image layout="responsive" src={cupcake} alt="" />
                        </div>
                        <div className="col-8">
                          <h5 className="fw-bold">
                            Free Consultation
                          </h5>
                          <small> Consult with freemium health service providers at <br />
                            no-cost</small>
                          <div className="row">
                            <button className="btn btn-danger">
                              Book an Appointment
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>




                  <div className="row ms-2 mt-3">
                    <div className="card">
                      <div className="card-header">
                        <div className="row ms-5 mt-3">
                          <div className="col-2">
                            <Image
                              layout="responsive"
                              src={appointment}
                              alt=""
                            />
                          </div>
                          <div className="col-10">
                            <h2 className="fw-bold text-black mt-3">
                              Upcoming Appointment
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                      <UpcomingAppointments />
                        <UpcomingAppointments />
                        <UpcomingAppointments />
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div
                  className="row pt-2 pb-2 ps-5 ms-1"
                  style={{
                    backgroundColor: "rgba(196, 196, 196, 0.27)",
                    marginTop: "30px",
                    marginBottom: "80px",
                  }}
                >
                  <div className="col-10">
                    <span className="fw-bold fs-5" style={{ color: "black" }}>
                      Add your Health Medical Insurance Provider
                    </span>
                  </div>

                  <div className="col-2">
                    <i
                      style={{ height: "63", width: "62", color: "black" }}
                      className="fa fa-plus pt-4 ps-2"
                    ></i>
                  </div>
                </div>
              </div>
              <Footer />
            </div>

            <>
              <Modal show={show} onHide={handleClose} size="">
                <Modal.Header closeButton onClick={() => this.handleClose()}>
                  <Modal.Title>
                    Dental Cleaning Routine <br></br>
                    <small>Appointment Booking</small>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form action="">
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1">
                        <i className="fa fa-calendar-check" aria-hidden="true"></i>
                      </InputGroup.Text>
                      <FormControl
                        placeholder="Last Dental Cleaning"
                        aria-label="Last Dental Cleaning"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1">
                        <i className="fa fa-calendar-check" aria-hidden="true"></i>
                      </InputGroup.Text>
                      <FormControl
                        placeholder="Next Planned Visit"
                        aria-label="Next Planned Visit"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1">
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </InputGroup.Text>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        id="basic-addon1"
                      >
                        <option selected>Preferred Frequency</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                     
                    </InputGroup>
                  </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="warning" onClick={handleClose}>
                    Cancel
                  </Button>
                  <Link href="/doctor/doctor-pagefour">
                    <Button variant="success" onClick={handleClose}>
                      Save
                    </Button>
                  </Link>
                </Modal.Footer>
              </Modal>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consult;
