import React, { useState } from "react";
import Banner from "./components/banner";
import SearchArea from "./components/search_area";
import SortArea from "./components/sort_area";
import Footer from "./components/footer";
import { Table, Modal } from "react-bootstrap";
import BookingConfirmation from "./components/BookingConfirmation";
import ConfirmedBooking from "./components/ConfirmedBooking";
import MonthlyAvailability from "./components/MonthlyAvailability";
import { Carousel } from "react-bootstrap";
import Sidebar from "../layouts/Sidebar";
import FeatherIcon from 'feather-icons-react';
import Header from "../layouts/Header";
import Image from 'next/image'
import carouselImage from "../assets/img/doctors/rectangle-103@2x.png";

function Providers() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showConfirmed, setShowconfirmed] = useState(false);

  const handleConfirmedClose = () => setShowconfirmed(false);
  const handleConfirmedShow = () => {
    handleClose(true);
    setShowconfirmed(true);
  };

  const previousAvailability = () => {
    
  }
  const nextAvailability = () => {

  }
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
              <div className="row mb-5 mt-4">
                <div className="col-10 ">
                  <div className="row">
                    <div className="col-5">
                      <div className="row">
                        <div className="col-11">
                          <h4 className="ms-2 mt-1">331 Health Care Providers</h4>
                        </div>
                        <div className="col-1">
                          <button className="btn" onClick={previousAvailability}><FeatherIcon icon="chevron-left" /></button>
                        </div>
                      </div>
                    </div>
                    <div className="col-7">
                      <Table responsive>
                        <tbody>
                          <tr>
                           
                            {/* <th><button className="btn" onClick={previousAvailability}><FeatherIcon icon="chevron-left" /></button></th> */}
                            <th>
                              <p style={{marginLeft:"20px"}}>
                              SUN <br />
                              may 2

                              </p>
                            </th>
                            <th>
                              <p style={{marginLeft:"-60px"}}>
                              MON <br />
                              may 3

                              </p>
                            </th>
                            <th>
                              <p style={{marginLeft:"-20px"}}>
                              TUE <br />
                              may 4
                              </p>
                            </th>
                            <th>
                              <p style={{marginLeft:"-30px"}}>
                              WEN <br />
                              may 5

                              </p>
                            </th>
                            <th>
                              <p style={{marginLeft:"-10px"}}>

                              THU <br />
                              may 6
                              </p>
                            </th>
                            <th>
                              <p style={{marginLeft:"-40px"}}>

                              FRI <br />
                              may 7
                              </p>
                            </th>
                            <th>
                              <p style={{marginLeft:"-10px"}}>

                              SAT <br />
                              may 8
                              </p>
                            </th>
                            {/* <th><button className="btn" onClick={nextAvailability}><FeatherIcon icon="chevron-right" /></button></th> */}
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                    
                  </div>

                  <MonthlyAvailability handleShow={handleShow} />
                  <MonthlyAvailability handleShow={handleShow} />
                  <MonthlyAvailability handleShow={handleShow} />
                  <MonthlyAvailability handleShow={handleShow} />
                  <MonthlyAvailability handleShow={handleShow} />
                </div>

                <div className="col-2">
                  <div className="col-12">
                  <button style={{ marginBottom:"-30px", marginLeft:"-50px"}} className="btn" onClick={nextAvailability}><FeatherIcon icon="chevron-right" /></button>
                    <h4>Hospital Image</h4>
                    <div
                      className="row bg-white m-1"
                      style={{ height: "195px", width: "210px" }}
                    >
                      <Carousel
                        prevLabel=""
                        style={{ color: "black" }}
                        variant="dark"
                      >
                        <Carousel.Item>
                          <Image
                            layout="responsive"
                            className="d-block w-100 img-fluid"
                            src={carouselImage}
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <Image
                            layout="responsive"
                            className="d-block w-100 img-fluid"
                            src={carouselImage}
                            alt="First slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                  </div>
                  <Image src={carouselImage} alt="" layout="responsive" />
                </div>
              </div>

              <Footer />
            </div>

            <>
              <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header>
                  <Modal.Title>
                    <span
                      className="text-center fs-1"
                      style={{ color: "#82151c" }}
                    >
                      Appointment Booking Confirmation
                    </span>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <BookingConfirmation openConfirmed={handleConfirmedShow} />
                </Modal.Body>
              </Modal>
            </>

            <>
              <Modal
                show={showConfirmed}
                onHide={handleConfirmedClose}
                size="lg"
              >
                <Modal.Header>
                  <Modal.Title>
                    <span
                      className="text-center fs-1"
                      style={{ color: "#82151c" }}
                    >
                      Booking Confirmed
                    </span>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ConfirmedBooking />
                </Modal.Body>
              </Modal>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Providers;
