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
import flightImg from "../assets/img/flight/invoice.png";

function FlightInvoice() {
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
                            

                            <div className="row ms-4 pt-2 mt-5" style={{ backgroundColor: "white" }}>
                                <div className="col-6">
                                    <p className="fs-2">Quickai</p>
                                </div>
                                <div className="col-6">
                                    <h1 className="text-end">Invoice</h1>
                                    <h6 className="text-end">Invoice Number - 23123</h6>
                                </div>
                                <hr />
                                <div className="col-6">
                                    <p className="">
                                        <b>Invoiced to:</b> <br />
                                        Neil Patel <br />
                                        15 Hages Mes, High Wyudas <br />
                                        JKSLDDA56 <br />
                                        United Kingdom
                                    </p>
                                </div>
                                <div className="col-6">
                                    <p className="text-end">
                                        <b>Pay to:</b> <br />
                                        Quickai inc. <br />
                                        15 Hages Mes, High Wyudas <br />
                                        Orange cak <br />
                                    </p>
                                </div>
                                <div className="col-6">
                                    <p className="">
                                        <b>Payment Method:</b> <br />
                                            Credit Card
                                    </p>
                                </div>
                                <div className="col-6 mb-3">
                                    <p className="text-end">
                                        <b>Booking Date:</b> <br />
                                        12/12/2021
                                    </p>
                                </div>
                                <hr />

                                <div className="card">
                                    <div className="card-header">
                                        <h4>Booking Summary</h4>
                                        <div className="row">
                                            <div className="col-3">
                                                <b>Flight Details</b>
                                            </div>
                                            <div className="col-3"><b>Base Fare</b></div>
                                            <div className="col-3"><b>Taxes and Fee</b></div>
                                            <div className="col-3"><p className="text-end"><b>Amount</b></p></div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-3">
                                                <p><b>Indigo 6E-JHKJ - Delhi to sydeny <br />
                                                Travel date: sat 23, 2021 <br />
                                                Neil Patel</b></p>
                                            </div>
                                            <div className="col-3">
                                                <p className="text end">$987</p>
                                            </div>
                                            <div className="col-3">
                                                <p className="text-end">0</p>
                                            </div>
                                            <div className="col-3">
                                                <p className="text-end">$500</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-3">
                                                <p><b>Indigo 6E-JHKJ - Delhi to sydeny <br />
                                                Travel date: sat 23, 2021 <br />
                                                Neil Patel</b></p>
                                            </div>
                                            <div className="col-3">
                                                <p className="text end">$987</p>
                                            </div>
                                            <div className="col-3">
                                                <p className="text-end">0</p>
                                            </div>
                                            <div className="col-3">
                                                <p className="text-end">$500</p>
                                            </div>
                                        </div>
                                        <hr />

                                        <div className="row">
                                            <div className="col-4">

                                            </div>
                                            <div className="col-5">
                                                <p className="text-end"><b>Sub Total:</b></p>
                                            </div>
                                            <div className="col-3">
                                                <p className="text-end">$400</p>
                                            </div>
                                        </div>
                                        <hr />

                                        <div className="row">
                                            <div className="col-4"></div>
                                            <div className="col-5">
                                                <p className="text-end">Promotional Code</p>
                                            </div>
                                            
                                            <div className="col-3">
                                                <p className="text-end">-$100</p>
                                            </div>
                                        </div>
                                        <hr />

                                        <div className="row">
                                            <div className="col-4"></div>
                                            <div className="col-5">
                                                <p className="text-end"><b >Total:</b></p>
                                            </div>
                                            <div className="col-3">
                                                <p className="text-end">$400</p>
                                            </div>
                                        </div>
                                        <hr />

                                    </div>
                                </div>

                                <hr />
                                <div className="row mt-2 mb-3">
                                    <p className="text-center"><b className="fs-5">Note</b>: This is computer generated recienpt and does not require physical signiture </p>
                                </div>

                                <div className="row mb-5">
                                <div className="col-4"></div>
                                <div className="col-2">
                                    <div className="row">
                                    <button className="btn border">Print</button>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="row">
                                    <button className="btn border">Download</button>
                                    </div>
                                </div>
                                </div>

                                <div className="row p-3 ms-3 text-center" style={{backgroundColor:"lightgray"}}>
                                    <Link href="/booking/flights">Back to My Account</Link>
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

export default FlightInvoice;
