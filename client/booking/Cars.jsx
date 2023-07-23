import React, { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import BannerOne from "./components/BannerOne";
import CarSearchArea from "./components/CarSearchArea";
import BookingFooter from "./components/BookingFooter";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import FeatherIcon from 'feather-icons-react';
import { Form } from 'react-bootstrap';
import CheckBoxForCategory from './components/CheckBoxForCategory';
import CarComponent from './components/CarComponent';

function Cars() {
   
    const [value, setValue] = useState(0);
    const busType = [
        {
            label: "Sleeper"

        },
        {
            label: "Seater"
        },
        {
            label: "Semi-Seater"
        }
    ]

    const busOperators = [
        {
            label: "Ak Tour and Travels"

        },
        {
            label: "Vikas Travels"
        },
        {
            label: "Gujarat Travels"
        }
    ]
    return (
        <div className="main-wrapper">
            <Header />


            <Sidebar />
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <BannerOne bookingtype="Hotel" />
                    <CarSearchArea productType="car" />
                    <div className="row">
                        <div className="col-12 booking-body">

                            <div className="row pt-5 mt-3 ps-2">
                                <div className="col-9">
                                <div className="card">
                                    <div className="card-header">
                                        <h3><b>Featured Transport Companies</b></h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <CarComponent />
                                            <CarComponent />
                                            <CarComponent />
                                            <CarComponent />
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-3 col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Filter</h5>
                                        </div>
                                        <div className="card-body">
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
                                            <p>00:00 - 23:59</p>
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
                                                    <h6 style={{ color: "blue" }}>Bus Types</h6>
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
                                                        {busType.map((pt, i) => {
                                                            return (
                                                                <CheckBoxForCategory key={i} label={pt.label} />
                                                            );
                                                        })}
                                                    </div>
                                                </Form.Group>
                                            </fieldset>

                                            <hr />

                                            <div className="row">
                                                <div className="col-8" >
                                                    <h6 style={{ color: "blue" }}>Bus Operators</h6>
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
                                                        {busOperators.map((pt, i) => {
                                                            return (
                                                                <CheckBoxForCategory key={i} label={pt.label} count={pt.count} />
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

export default Cars;
