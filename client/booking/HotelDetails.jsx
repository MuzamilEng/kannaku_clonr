import React from "react";
import BannerOne from "./components/BannerOne";
import SearchArea from "./components/SearchArea";
import BookingFooter from "./components/BookingFooter";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import FeatherIcon from 'feather-icons-react'
import Room from "./components/Room";
import Review from "./components/Review";
import { FormControl, InputGroup, Dropdown, DropdownButton } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import hotelImage from "../assets/img/hotel.jpg";

function HotelDetails() {
    const handlesidebar = () => {
        document.body.classList.toggle('mini-sidebar');
    }

    const rooms = [
        {
            img: hotelImage,
            rooomtype: "Standard Room",
            price: 210,
        },
        {
            img: hotelImage,
            rooomtype: "Deluxe Room",
            price: 250,
        },
        {
            img: hotelImage,
            rooomtype: "Premium Room",
            price: 345,
        },
    ]
    return (
        <div className="main-wrapper">
            <Header />


            <Sidebar />
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <BannerOne bookingtype="Hotel" />
                    <SearchArea productType="hotel" />
                    <div className="row">
                        <div className="col-12 booking-body">

                            <div className="row ms-4 mt-5 p-2">
                                <div className="col-md-8 col-sm-12 p-4" style={{ backgroundColor: "white" }}>
                                    <Image layout="responsive" className="rounded" src={hotelImage} alt="" />

                                    <div className="row p-2 mt-2">
                                        <div className="col">
                                            <a href="#knownfor">
                                                <h6 className="text-blue">Known For</h6>
                                            </a>
                                        </div>
                                        <div className="col-3">
                                            <a href="#chooseroom">
                                                <h6>Choose Room</h6>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a href="#amenities">
                                                <h6>Amenities</h6>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a href="#reviews">
                                                <h6>Reviews</h6>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a href="#hotelpolicy">
                                                <h6>Hotel Policy</h6>
                                            </a>
                                        </div>
                                        <hr />
                                    </div>
                                    <div className="row">
                                        <p>
                                            Located in Ahmedabad, 16 km from Gandhi Ashram, The Orchid Hotel provides accommodation with a restaurant, free private parking, a garden and a terrace. With free WiFi, this 3-star hotel offers a tour desk. The accommodation features a 24-hour front desk, room service and currency exchange for guests.
                                        </p>
                                        <div className="col ps-5">
                                            <span><FeatherIcon icon="chevron-right" /> A continental breakfast</span><br />
                                            <span><FeatherIcon icon="chevron-right" /> A continental breakfast</span><br />
                                            <span><FeatherIcon icon="chevron-right" /> A continental breakfast</span><br />
                                            <span><FeatherIcon icon="chevron-right" /> A continental breakfast</span><br />
                                            <span><FeatherIcon icon="chevron-right" /> A continental breakfast</span><br />
                                        </div>
                                    </div>

                                    <hr />
                                    <div className="row">
                                        <div className="col-1 ms-2"> <FeatherIcon icon="message-circle" /> </div>
                                        <div className="col"><h5>Staff Speaks</h5> English, Hindi, Spanish</div>
                                    </div>
                                    <hr />

                                    <h4 className="text-blue" id="chooseroom">Choose Room</h4>
                                    {
                                        rooms.map((room, i) => {
                                            return (
                                                <Room key={i} img={room.img} roomtype={room.rooomtype} price={room.price} />

                                            );
                                        })
                                    }

                                    <h4 className="text-blue" id="amenities">Amenities</h4>
                                    <br />
                                    <span className="p-2 rounded border ms-2">
                                        <i className="fa fa-wifi" style={{ color: "gray" }} aria-hidden="true"></i>
                                    </span>
                                    <span className="p-2 rounded border ms-2">
                                        <i className="fa fa-tv" style={{ color: "gray" }} aria-hidden="true"></i>
                                    </span>
                                    <span className="p-2 rounded border ms-2">
                                        <i className="fa fa-water" style={{ color: "gray" }} aria-hidden="true"></i>
                                    </span>
                                    <br />
                                    <hr />
                                    <h4 className="text-blue mb-2" id="reviews">Reviews</h4>
                                    <br />
                                    <Review />
                                    <Review />
                                    <Review />
                                    <button className="btn btn-primary" style={{ backgroundColor: "blue" }}>
                                        View More Reviews
                                    </button>
                                    <hr />
                                    <h4 className="text-blue mb-2" id="writereview">Write Review</h4>
                                    <form action="">
                                        <input type="text" placeholder="Enter Your Name" className="form-control" />
                                        <br />
                                        <textarea name="review" id="" cols="30" rows="10" className="form-control">Enter Your Reviw</textarea>

                                        <br />
                                        <label><b>Rating</b></label> <br />
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="bad"></input>
                                            <label className="form-check-label" htmlFor="inlineRadio1">Bad</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="poor"></input>
                                            <label className="form-check-label" htmlFor="inlineRadio2">Poor</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="fair"></input>
                                            <label className="form-check-label" htmlFor="inlineRadio2">Fair</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="good"></input>
                                            <label className="form-check-label" htmlFor="inlineRadio2">Good</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="excellent"></input>
                                            <label className="form-check-label" htmlFor="inlineRadio2">Excellent</label>
                                        </div>
                                        <br />
                                        <button className="btn btn-primary" style={{ backgroundColor: "blue" }}>
                                            Submit
                                        </button>
                                    </form>
                                </div>


                                <div className="col-md-4 col-sm-12 ">
                                    <div className="row p-3 ms-2" style={{ backgroundColor: "white" }}>
                                        <p>
                                            <span style={{ backgroundColor: "green", color: "white" }} className="rounded p-1 me-2">8.2</span>
                                            <b>Excellent</b>
                                            {"(245 reviews)"}
                                        </p>
                                        <hr />

                                        <form>
                                            <div className="row">

                                                <div className="col-6">
                                                    <div>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Check in"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Check out"
                                                            aria-label="First name"
                                                        />
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="col-12 mt-2">
                                                    <div className="row">
                                                        <div className="col-8">

                                                            <DropdownButton
                                                                variant="outline-secondary"
                                                                title=" Rooms/People "
                                                                id="basic-addon1"
                                                                className="w-full"
                                                            >
                                                                <Dropdown.Item href="#">Rooms</Dropdown.Item>
                                                            </DropdownButton>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div className="col-12 mt-2">
                                                    <InputGroup className="mb-3">
                                                        <FormControl
                                                            placeholder="Room Type"
                                                            aria-label="Room Type"
                                                            aria-describedby="basic-addon1"
                                                        />
                                                    </InputGroup>

                                                </div>

                                            </div>
                                        </form>
                                        <div className="row">
                                            <div className="col-2"><b>$<span>210</span></b></div>
                                            <div className="col-2"><del>$250</del></div>
                                            <div className="col-4"><span style={{ color: "green" }}>16% off!</span></div>
                                            <div className="col-4"><span>1Room/Night</span></div>

                                        </div>

                                        <div className="row mt-2 ps-2">
                                            <button className="btn btn-primary" style={{ backgroundColor: "blue" }}>
                                                <Link href="/booking/hotelinvoice"><a className="text-white">Book Now</a></Link>
                                            </button>
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

export default HotelDetails;
