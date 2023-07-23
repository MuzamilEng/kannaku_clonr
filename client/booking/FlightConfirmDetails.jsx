import React from "react";
import BannerOne from "./components/BannerOne";
import BookingFooter from "./components/BookingFooter";
import Header from "../layouts/Header";
import FlightSearchArea from "./flightcomponents/FlightSearchArea";
import FlightSidebar from "../layouts/Sidebar";
import FeatherIcon from "feather-icons-react"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import { Form } from "react-bootstrap";
import flightImg from "../assets/img/flight/passengers.png";

function FlightConfirmDetails() {
    const handlesidebar = () => {
        document.body.classList.toggle('mini-sidebar');
    }
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <div className="main-wrapper">
            <Header />


            <FlightSidebar />
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <BannerOne bookingtype="Flight" />
                    <FlightSearchArea productType="flight" img={flightImg} />
                    <div className="row">
                        <div className="col-12 flightbooking-body">


                            <div className="row ms-4 pt-2 mt-5">
                                <div className="col-8">
                                    <h3>Payment Method</h3>
                                    <div className="row p-2 ms-3 me-1" style={{ backgroundColor: "lightgray" }}>
                                        <Carousel responsive={responsive} >
                                            <div>
                                                <div className="col-10">
                                                    <div className="row p-2 ms-3 me-3 border bg-white rounded">Credit or Debit Card</div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="col-10">
                                                    <div className="row p-2 ms-3 me-3 border bg-white rounded">Gift Card</div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="col-10">
                                                    <div className="row p-2 ms-3 me-3 border bg-white rounded">EMI on Credit or Debit Card</div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="col-10">
                                                    <div className="row p-2 ms-3 me-3 border bg-white rounded">Google pay</div>
                                                </div>
                                            </div>

                                        </Carousel>
                                    </div>

                                    <div className="row p-2 mt-2">
                                        <input type="text" placeholder="Card Number" className="form-control mb-2" />

                                        <input type="text" placeholder="Name of Card" className="form-control mb-2" />

                                        <div className="col-4 mb-2">
                                            <label htmlFor="">Expiry Date</label>
                                            <select className="form-control">
                                                <option value="">July</option>
                                                <option value="">July</option>
                                                <option value="">July</option>
                                            </select>
                                        </div>
                                        <div className="col-4 mb-2">
                                            <label htmlFor="">Expiry Year</label>
                                            <select className="form-control">
                                                <option value="">2022(year)</option>
                                                <option value="">2022(year)</option>
                                                <option value="">2022(year)</option>
                                            </select>
                                        </div>
                                        <div className="col-4 mb-2">
                                            <label htmlFor="">CVV Code</label>
                                            <select className="form-control">
                                                <option value="">CVV code</option>
                                                <option value="">CVV code</option>
                                                <option value="">CVV code</option>
                                            </select>
                                        </div>
                                        <div className="row mt-2 mb-2">
                                            <div className="col-1">
                                                <Form.Check type="checkbox" name="flight" id="flight" />
                                            </div>
                                            <div className="col">
                                                I accept the fare rules
                                            </div>
                                        </div>

                                        <h4>5000 USD</h4>
                                        <div className="col">

                                            <button className="btn rounded text-white" style={{ backgroundColor: "blue" }} ><Link href="/booking/flightintinery" ><span className="text-white">Pay Now</span></Link></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="row p-2">
                                        <h4 className="text-blue">Fare Details</h4>
                                        <hr />
                                        <div className="col-6">Base Fare</div>
                                        <div className="col-6 text-end"><h6>$323</h6></div>
                                        <div className="col-6">Taxes and Fees</div>
                                        <div className="col-6 text-end"><h6>$32</h6></div>
                                        <div className="col-6">Insurance</div>
                                        <div className="col-6 text-end"><h6>$23</h6></div>
                                        <div className="col-6"><b>Total</b></div>
                                        <div className="col-6 text-end"><h5><b>$423</b></h5></div>

                                        <h5 className="text-blue">Promo Code</h5>
                                        <div className="col-8">
                                            <div className="row">
                                                <input type="text" className="form-control" placeholder="Promo Code" />
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="row mb-3">

                                                <button className="btn btn-secondary p-2">APPLY</button>
                                            </div>
                                        </div>

                                        <button className="btn btn-secondary p-2">Proceed To payment</button>
                                    </div>
                                </div>
                            </div>


                            <BookingFooter />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlightConfirmDetails;
