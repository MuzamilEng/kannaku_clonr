import React, { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import BannerOne from "./components/BannerOne";
import CarSearchArea from "./components/CarSearchArea";
import BookingFooter from "./components/BookingFooter";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import FeatherIcon from 'feather-icons-react';
import { Dropdown, DropdownButton, Form } from 'react-bootstrap';
import CheckBoxForCategory from './components/CheckBoxForCategory';
import Car from './components/Product';

function CarList() {
    const handlesidebar = () => {
        document.body.classList.toggle('mini-sidebar');
    }
    const [value, setValue] = useState(0);
    const carType = [
        {
            label: "Economy",
            count: 90
        },
        {
            label: "Compact",
            count: 67
        },
        {
            label: "Mid-size",
            count: 45
        },
        {
            label: "Mid-size",
            count: 45
        },
        {
            label: "Mid-size",
            count: 45
        },
    ]

    const passengers = [
        {
            label: "1-2 passengers",
            count: 85

        },
        {
            label: "1-2 passengers",
            count: 85

        },
        {
            label: "1-2 passengers",
            count: 85

        },

    ]

    const bags = [
        {
            label: "1-2 bags",
            count: 85

        },
        {
            label: "1-2 bags",
            count: 85

        },
        {
            label: "1-2 bags",
            count: 85

        },

    ]
    const transmission = [
        {
            label: "Automatic",
            count: 85

        },
        {
            label: "Manual",
            count: 85

        }
    ]
    const userreview = [
        {
            label: "Excellent",
            count: 85

        },
        {
            label: "Good",
            count: 85


        },
        {
            label: "Fair",
            count: 85

        },
        {
            label: "Bad",
            count: 85

        }
    ]
    const paymentType = [
        {
            label: "Pay Now",
            count: 85

        },
        {
            label: "Pay at counter",
            count: 85

        }
    ]

    const carList = [
        {
            img: "/assets/img/img-01.jpg",
            name: "Creta Hyundai",
            location: "Ashram road, Ahmedabad",
            rating: 5,
            price: 210,
            link: "/booking/hoteldetails"
        },
        {
            img: "/assets/img/img-01.jpg",
            name: "Creta Hyundai",
            location: "Ashram road, Ahmedabad",
            rating: 5,
            price: 210,
            link: "/booking/hoteldetails"
        },
        {
            img: "/assets/img/img-01.jpg",
            name: "Creta Hyundai",
            location: "Ashram road, Ahmedabad",
            rating: 5,
            price: 210,
            link: "/booking/cardetails"
        },
        {
            img: "/assets/img/img-01.jpg",
            name: "The Orchid Hotel",
            location: "Ashram road, Ahmedabad",
            rating: 5,
            price: 210,
            link: "/booking/hoteldetails"
        },
    ]
    return (
        <div className="main-wrapper">
            <Header />


            <Sidebar />
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <BannerOne bookingtype="Parcel" />
                    <CarSearchArea productType="car" />
                    <div className="row">
                        <div className="col-12 booking-body">

                            <div className="row ms-4 pt-5 mt-5">
                                <div className="col-md-9 col-sm-12">
                                    <div className="row m-2 p-2 rounded" style={{ backgroundColor: "white" }}>
                                        <div className="col-3">
                                            <span style={{ fontWeight: "bold" }}>Ahmasdaj 231 car found</span>
                                        </div>
                                        <div className="col-3">
                                            <span style={{ color: "yellow", fontWeight: "bold" }}>prices inclusive of taxes</span>
                                        </div>
                                        <div className="col-2"></div>
                                        <div className="col-2"><p className="text-end">Sort by:</p></div>
                                        <div className="col-2 mb-1">
                                            <DropdownButton
                                                variant="outline-secondary"
                                                title="Sort By:"
                                                id="basic-addon1"
                                                className="w-full"
                                            >
                                                <Dropdown.Item href="#">Popularity</Dropdown.Item>
                                                <Dropdown.Item href="#">Location</Dropdown.Item>
                                            </DropdownButton>
                                        </div>
                                        <hr />
                                        {carList.map((car, i) => {
                                            return (
                                                <Car key={i} img={car.img} name={car.name} location={car.location} rating={car.rating} price={car.price} link="/booking/cardetails" />
                                            )
                                        })}
                                    </div>
                                </div>


                                <div className="col-md-3 col-sm-12 p-2 rounded" style={{ backgroundColor: "white" }}>
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Filter</h5>
                                        </div>
                                        <div className="card-body">

                                            <div className="row">
                                                <div className="col-8" >
                                                    <h6 style={{ color: "blue" }}>Car Types</h6>
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
                                                        {carType.map((ct, i) => {
                                                            return (
                                                                <CheckBoxForCategory key={i} label={ct.label} count={ct.count} />
                                                            );
                                                        })}
                                                    </div>
                                                </Form.Group>
                                            </fieldset>

                                            <hr />

                                            <div className="row">
                                                <div className="col-8" >
                                                    <h6 style={{ color: "blue" }}>Passengers</h6>
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
                                                        {passengers.map((pt, i) => {
                                                            return (
                                                                <CheckBoxForCategory key={i} label={pt.label} count={pt.count} />
                                                            );
                                                        })}
                                                    </div>
                                                </Form.Group>
                                            </fieldset>
                                            <hr />
                                            <div className="row">
                                                <div className="col-8" >
                                                    <h6 style={{ color: "blue" }}>Bags</h6>
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
                                                        {bags.map((bag, i) => {
                                                            return (
                                                                <CheckBoxForCategory key={i} label={bag.label} count={bag.count} />
                                                            );
                                                        })}
                                                    </div>
                                                </Form.Group>
                                            </fieldset>
                                            <hr />
                                            <div className="row">
                                                <div className="col-8" >
                                                    <h6 style={{ color: "blue" }}>Transmission</h6>
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
                                                        {transmission.map((tr, i) => {
                                                            return (
                                                                <CheckBoxForCategory key={i} label={tr.label} count={tr.count} />
                                                            );
                                                        })}
                                                    </div>
                                                </Form.Group>
                                            </fieldset>

                                            <hr />
                                            <div className="row">
                                                <div className="col-8" >
                                                    <h6 style={{ color: "blue" }}>User Review</h6>
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
                                                        {userreview.map((ur, i) => {
                                                            return (
                                                                <CheckBoxForCategory key={i} label={ur.label} count={ur.count} />
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
                                                    <h6 style={{ color: "blue" }}>Payment Type</h6>
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
                                                        {paymentType.map((pt, i) => {
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

export default CarList;
