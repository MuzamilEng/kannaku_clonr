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
import Flight from "./flightcomponents/Flight";
import flightImg from "../assets/img/flight/chooseflight.png";

function FlightOneWay() {
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

                            <div className="row pt-2 mt-5">
                                <div className="col-8">
                                    <Flight />
                                    <Flight />
                                    <Flight />
                                    <Flight />
                                    <Flight />
                                </div>
                                <div className="col-md-4 col-sm-12 p-2 rounded" style={{ backgroundColor: "white" }}>
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Filter</h5>
                                        </div>
                                        <div className="card-body">

                                            <div className="row">
                                                <div className="col-8" >
                                                    <h6 style={{ color: "blue" }}>Number of Stops</h6>
                                                </div>
                                                <div className="col-4">
                                                    <div className="row">
                                                        <p className="text-end"><FeatherIcon style={{ color: "blue" }} icon="chevron-down" /></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <fieldset>
                                                <Form.Group>
                                                    <div className="row">
                                                        {numberOfStops.map((nofs, i) => {
                                                            return (
                                                                <CheckBoxForCategory key={i} label={nofs.label} />
                                                            );
                                                        })}
                                                    </div>
                                                </Form.Group>
                                            </fieldset>

                                            <hr />

                                            <div className="row">
                                                <div className="col-8" >
                                                    <h6 style={{ color: "blue" }}>Departure Time</h6>
                                                </div>
                                                <div className="col-4">
                                                    <div className="row">
                                                        <p className="text-end"><FeatherIcon style={{ color: "blue" }} icon="chevron-down" /></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <fieldset>
                                                <Form.Group>
                                                    <div className="row">
                                                        {departureTime.map((time, i) => {
                                                            return (
                                                                <CheckBoxForCategory key={i} label={time.label} count={time.time} />
                                                            );
                                                        })}
                                                    </div>
                                                </Form.Group>
                                            </fieldset>

                                            <hr />
                                            <div className="row">
                                                <div className="col-8" >
                                                    <h6 style={{ color: "blue" }}>Price</h6>
                                                </div>
                                                <div className="col-4">
                                                    <div className="row">
                                                        <p className="text-end"><FeatherIcon style={{ color: "blue" }} icon="chevron-down" /></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>$125 - $920</p>
                                            <RangeSlider
                                                value={value}
                                                onChange={e => setValue(e.target.value)}
                                                variant='primary'
                                                tooltipPlacement='top'
                                                tooltip='on'
                                                size="lg"
                                            />
                                            <hr />

                                            <div className="row">
                                                <div className="col-8" >
                                                    <h6 style={{ color: "blue" }}>Airlines</h6>
                                                </div>
                                                <div className="col-4">
                                                    <div className="row">
                                                        <p className="text-end"><FeatherIcon style={{ color: "blue" }} icon="chevron-down" /></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <fieldset>
                                                <Form.Group>
                                                    <div className="row">
                                                        {airlines.map((airline, i) => {
                                                            return (
                                                                <CheckBoxForCategory key={i} label={airline.label} />
                                                            );
                                                        })}
                                                    </div>
                                                </Form.Group>
                                            </fieldset>

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

export default FlightOneWay;
