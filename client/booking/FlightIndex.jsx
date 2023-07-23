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
import Image from "next/image";
import img01 from "../assets/img/img-01.jpg";
import flightImg from "../assets/img/flight/flight.png";


function FlightIndex() {
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
                          
                            <div className="row ms-1 me-1 pt-2 mt-4">
                                <Carousel responsive={responsive}>
                                    <div>
                                        <Image layout='responsive' className="img-fluid p-2" src={img01} alt="" />
                                    </div>
                                    <div>
                                        <Image layout='responsive' className="img-fluid p-2" src={img01} alt="" />
                                    </div>
                                    <div>
                                        <Image layout='responsive' className="img-fluid p-2" src={img01} alt="" />
                                    </div>
                                    <div>
                                        <Image layout='responsive' className="img-fluid p-2" src={img01} alt="" />
                                    </div>
                                </Carousel>
                            </div>

                            <div className="row ms-3 me-1 mt-4 p-4" style={{ backgroundColor: "lightgray" }}>
                                <h1 className="text-blue text-center">
                                    Why Book Flight with Quickai
                                </h1>
                                <h6 className="text-center">
                                    Book Flight Tickets online. Save Time and Money!
                                </h6>
                                <br />
                                <br />
                                <br />
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="row p-2">
                                                <h6 className="text-center text-blue"><FeatherIcon icon="dollar-sign" /></h6>
                                                <h4 className="text-center text-blue">No Booking Charges</h4>
                                                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. autem, nisi ratione voluptatum architecto.</p>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="row p-2">
                                                <h6 className="text-center text-blue"><FeatherIcon icon="dollar-sign" /></h6>
                                                <h4 className="text-center text-blue">No Booking Charges</h4>
                                                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. autem, nisi ratione voluptatum architecto.</p>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="row p-2">
                                                <h6 className="text-center text-blue"><FeatherIcon icon="dollar-sign" /></h6>
                                                <h4 className="text-center text-blue">No Booking Charges</h4>
                                                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. autem, nisi ratione voluptatum architecto.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="row ms-2 me-1 mt-5">
                                <div className="col-6">
                                    <h4 className="text-blue text-center">
                                        Popular Domestic Routes
                                    </h4>
                                    <div className="row rounded border p-2 m-2">
                                        <div className="col-8">
                                            <span>Delhi to Mumbai Flights</span>
                                        </div>
                                        <div className="col-4">
                                            <div className="row mb-3">
                                                <div className="btn border text-blue">
                                                    <Link href="/booking/flightoneway"><a>Search Flights</a></Link>
                                                </div>

                                            </div>
                                        </div>
                                        <br />
                                        <hr />
                                        <br />
                                        <div className="col-8">
                                            <span>Delhi to Mumbai Flights</span>
                                        </div>
                                        <div className="col-4">
                                            <div className="row mb-3">
                                                <div className="btn border text-blue">
                                                    <Link href="/booking/flightoneway"><a>Search Flights</a></Link>
                                                </div>

                                            </div>
                                        </div>
                                        <br />
                                        <hr />
                                        <br />
                                        <div className="col-8">
                                            <span>Delhi to Mumbai Flights</span>
                                        </div>
                                        <div className="col-4">
                                            <div className="row mb-3">
                                                <div className="btn border text-blue">
                                                    <Link href="/booking/flightoneway"><a>Search Flights</a></Link>
                                                </div>

                                            </div>
                                        </div>
                                        <br />
                                        <hr />
                                        <br />
                                        <Link className="text-center" href="/booking/chooseflight"><a>View More</a></Link>
                                    </div>

                                </div>
                                <div className="col-6">
                                    <h4 className="text-blue text-center">
                                        Popular International Routes
                                    </h4>
                                    <div className="row rounded border p-2 m-2">
                                        <div className="col-8">
                                            <span>Delhi to Mumbai Flights</span>
                                        </div>
                                        <div className="col-4">
                                            <div className="row mb-3">
                                                <div className="btn border text-blue">
                                                    <Link href="/booking/flightoneway"><a>Search Flights</a></Link>
                                                </div>

                                            </div>
                                        </div>
                                        <br />
                                        <hr />
                                        <br />
                                        <div className="col-8">
                                            <span>Delhi to Mumbai Flights</span>
                                        </div>
                                        <div className="col-4">
                                            <div className="row mb-3">
                                                <div className="btn border text-blue">
                                                    <Link href="/booking/flightoneway"><a>Search Flights</a></Link>
                                                </div>

                                            </div>
                                        </div>
                                        <br />
                                        <hr />
                                        <br />
                                        <div className="col-8">
                                            <span>Delhi to Mumbai Flights</span>
                                        </div>
                                        <div className="col-4">
                                            <div className="row mb-3">
                                                <div className="btn border text-blue">
                                                    <Link href="/booking/flightoneway"><a>Search Flights</a></Link>
                                                </div>

                                            </div>
                                        </div>
                                        <br />
                                        <hr />
                                        <br />
                                        <Link className="text-center" href="/booking/chooseflight"><a>View More</a></Link>
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

export default FlightIndex;
