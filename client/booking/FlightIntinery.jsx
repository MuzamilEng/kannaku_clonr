import React, { useState } from "react";
import BannerOne from "./components/BannerOne";
import BookingFooter from "./components/BookingFooter";
import Header from "../layouts/Header";
import FlightSearchArea from "./flightcomponents/FlightSearchArea";
import FlightSidebar from "../layouts/Sidebar";
import FeatherIcon from "feather-icons-react"
import RangeSlider from 'react-bootstrap-range-slider';
import Link from "next/link";
import CheckBoxForCategory from "./components/CheckBoxForCategory";
import { Form } from "react-bootstrap";
import SingleTrip from "./flightcomponents/SingleTrip";
import flightImg from "../assets/img/flight/itinerary.png";
import img01 from "../assets/img/img-01.jpg";
import Image from 'next/image'

function FlightIntinery() {
    const handlesidebar = () => {
        document.body.classList.toggle('mini-sidebar');
    }

    const [value, setValue] = useState(0);
    const numberOfStops = [
        {
            label: "Non Stop",
        },
        {
            label: "1 Stop",
        },
        {
            label: "2+ Stop",
        },

    ]
    const airlines = [
        {
            label: "Asiana Airlines",
        },
        {
            label: "Air Canada",
        },
        {
            label: "IndiGo",
        },

    ]
    const departureTime = [
        {
            label: "Early Morning",
            time: "12-8am"
        },
        {
            label: "Morning",
            time: "12-8am"
        },
        {
            label: "Mid-day",
            time: "12-8am"
        },
        {
            label: "Mid-size",
            time: "12-8am"
        },
        {
            label: "Mid-size",
            time: "12-8am"
        },
    ]

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
                                <div className="col-7">
                                    <h1>Quickai</h1>
                                </div>
                                <div className="col-2">
                                    <div className="row">
                                        <button className="btn text-dark bg-white rounded">Print</button>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="row">
                                        <button className="btn text-dark bg-white rounded">Download</button>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <div className="row">
                                            <div className="col-3">
                                                <h4 className="text-blue">New Delhi(DEL)</h4>
                                            </div>
                                            <div className="col-3">
                                                <h4 className="text-blue">Sydney(SYD)</h4>
                                            </div>
                                            <div className="col-3">
                                                <h4 className="">15 jun, 2022</h4>
                                            </div>
                                            <div className="col-3">
                                                <button className="rounded p-1 text-white" style={{ backgroundColor: "green" }}>Confirmed</button>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-1">
                                            <span className="user-img">
                                                    <Image layout='responsive' src={img01} alt="" />
                                                </span>
                                            </div>
                                            <div className="col-2">
                                                
                                                <span>
                                                    <h5><b>IndiGo</b></h5>
                                                    <span>6E-7659</span>
                                                </span>
                                            </div>
                                            <div className="col-3">
                                                <h5><span>23:00</span></h5>
                                                <span>Departure</span>
                                            </div>
                                            <div className="col-3">
                                                <h5><span>18h 55m</span></h5>
                                                <span>Duration</span>
                                            </div>
                                            <div className="col-3">
                                                <h5><span>02:44</span></h5>
                                                <span>Arrival</span>

                                            </div>
                                        </div>

                                        <p className="mt-3">Confirmation Number: DHAKJD</p>
                                        <p>Class of service: Economy</p>
                                        <div className="row">
                                            <div className="col-4 mt-2">
                                                <h5>AIRPORT INFO</h5>
                                                <p>India sdjadad</p>
                                                <p>New Delhi</p>
                                                <p>Terminal 2</p>
                                            </div>
                                            <div className="col-4">
                                                <h5>FLIGHT INFO</h5>
                                                <p>Boeing 77777</p>
                                                <p>breakfast</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-2">
                                                <hr />
                                            </div>
                                            <div className="col-1">to</div>
                                            <div className="col-2"><hr /></div>
                                        </div>
                                        <div className="col-6">
                                           
                                            <p>Kingsford sadal</p>
                                            <p>Sydeny</p>
                                            <p>Terminal 2</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <div className="row">
                                            <div className="col-3">
                                                <h4 className="text-blue">Sydney(SYD)</h4>
                                            </div>
                                            <div className="col-3">
                                                <h4 className="text-blue">New Delhi(DEL)</h4>
                                            </div>
                                            <div className="col-3">
                                                <h4 className="">16 jun, 2022</h4>
                                            </div>
                                            <div className="col-3">
                                                <button className="rounded p-1 text-white" style={{ backgroundColor: "green" }}>Confirmed</button>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-1">
                                            <span className="user-img">
                                                    <Image layout='responsive' src={img01} alt="" />
                                                </span>
                                            </div>
                                            <div className="col-2">
                                                
                                                <span>
                                                    <h5><b>IndiGo</b></h5>
                                                    <span>6E-7659</span>
                                                </span>
                                            </div>
                                            <div className="col-3">
                                                <h5><span>23:00</span></h5>
                                                <span>Departure</span>
                                            </div>
                                            <div className="col-3">
                                                <h5><span>18h 55m</span></h5>
                                                <span>Duration</span>
                                            </div>
                                            <div className="col-3">
                                                <h5><span>02:44</span></h5>
                                                <span>Arrival</span>

                                            </div>
                                        </div>

                                        <p className="mt-3">Confirmation Number: DHAKJD</p>
                                        <p>Class of service: Economy</p>
                                        <div className="row">
                                            <div className="col-4 mt-2">
                                                <h5>AIRPORT INFO</h5>
                                                <p>India sdjadad</p>
                                                <p>New Delhi</p>
                                                <p>Terminal 2</p>
                                            </div>
                                            <div className="col-4">
                                                <h5>FLIGHT INFO</h5>
                                                <p>Boeing 77777</p>
                                                <p>breakfast</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-2">
                                                <hr />
                                            </div>
                                            <div className="col-1">to</div>
                                            <div className="col-2"><hr /></div>
                                        </div>
                                        <div className="col-6">
                                           
                                            <p>Kingsford sadal</p>
                                            <p>Sydeny</p>
                                            <p>Terminal 2</p>
                                        </div>
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

export default FlightIntinery;
