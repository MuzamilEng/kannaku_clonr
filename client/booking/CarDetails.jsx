import React from "react";
import BannerOne from "./components/BannerOne";
import CarSearchArea from "./components/CarSearchArea";
import BookingFooter from "./components/BookingFooter";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import Review from "./components/Review";
import Link from "next/link";
import Car from './components/Car';
import carImg from "../assets/img/car.png";

function CarDetails() {
    const handlesidebar = () => {
        document.body.classList.toggle('mini-sidebar');
    }


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

                            <div className="row mt-5">

                                <div className="col-md-8 col-sm-12 p-3">
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="row">
                                                <div className="col-4">
                                                    <h3 className="text-blue">Creta Hyundai</h3>
                                                </div>
                                                <div className="col-4 mt-2">
                                                    <span className="rounded text-blue bg-lightgreen p-1">Economy</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-body">
                                            <Car img={carImg} name="Creta Hyundai" rating={5} price={210} link="/booking/cardetails" />
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card-header">
                                        <h4 className="text-blue" >Driver Details</h4>
                                        </div>
                                        <div className="card-body">
                                        
                                           
                                           <form action="">
                                               <div className="row">
                                                   <div className="col-4 mb-2">
                                                       <input type="text" className="form-control" placeholder="First Name" />
                                                   </div>
                                                   <div className="col-4 mb-2">
                                                       <input type="text" className="form-control" placeholder="Last Name" />
                                                   </div>
                                                   <div className="col-4 mb-2">
                                                       <input type="text" className="form-control" placeholder="Driver Age" />
                                                   </div>
                                                   <div className="col-4 mb-2">
                                                       <input type="text" className="form-control" placeholder="Email" />
                                                       <a href="#"><small>Rental voucher will be sent to this email</small></a>
                                                   </div>
                                                   <div className="col-4 mb-2">
                                                       <input type="text" className="form-control" placeholder="Mobile Number" />
                                                   </div>
                                               </div>
                                           </form>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-md-4 col-sm-12 pt-3">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Price Summary</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-6">
                                                    <b>Car rental fee</b>
                                                </div>
                                                <div className="col-6">
                                                    <div className="row">
                                                        <h4 className="text-end">
                                                            <b>$250</b>
                                                        </h4>
                                                    </div>
                                                </div>
                                                <p>Taxes include Lorem ipsum dolor, sit amet consectetur, ratione blanditiis perspiciatis eaque tenetur deleniti!</p>

                                                <div className="col-6">
                                                    <b>Discount</b><span style={{ color: "green" }}>(16% off!)</span>
                                                </div>
                                                <div className="col-6">
                                                    <div className="row">
                                                        <h4 className="text-end">
                                                            <b>-$40</b>
                                                        </h4>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <b>Total Amount</b>
                                                </div>
                                                <div className="col-6">
                                                    <div className="row">
                                                        <h4 className="text-end">
                                                            <h1><b>$210</b></h1>
                                                        </h4>
                                                    </div>
                                                </div>
                                                
                                            </div>

                                            <form>
                                                <div className="row mt-2 ps-2">
                                                    <button className="btn btn-primary bg-blue">
                                                        <Link href="/booking/carinvoice"><span className="text-white">Book Now</span></Link>
                                                    </button>
                                                </div>
                                                <div className="form-group">
                                                    <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                                                    <label className="form-check-label" htmlFor="invalidCheck">
                                                        I understand and agree with the <span className="text-blue">Terms and Conditions</span>
                                                    </label>
                                                    <div className="invalid-feedback">
                                                        You must agree before submitting.
                                                    </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="" >Important Information</h3>
                                        </div>
                                        <div className="card-body">


                                            <h4>1.Excess</h4>
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae tempore asperiores a ad dolorem quidem labore modi laborum necessitatibus. Qui esse sapiente iure reprehenderit! Tenetur debitis unde qui amet sequi.</p>
                                            <h4>2.Mileage Allowance</h4>
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae tempore asperiores a ad dolorem quidem labore modi laborum necessitatibus. Qui esse sapiente iure reprehenderit! Tenetur debitis unde qui amet sequi.</p>
                                            <h4>3.Age Requirements</h4>
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae tempore asperiores a ad dolorem quidem labore modi laborum necessitatibus. Qui esse sapiente iure reprehenderit! Tenetur debitis unde qui amet sequi.</p>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="text-blue mb-2" id="reviews">Reviews</h4>
                                        </div>
                                        <div className="card-body">
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

export default CarDetails;
