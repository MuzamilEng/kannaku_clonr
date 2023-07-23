import React from "react";
import BannerOne from "./components/BannerOne";
import SearchArea from "./components/SearchArea";
import BookingFooter from "./components/BookingFooter";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";

function HotelInvoice() {
    const handlesidebar = () => {
        document.body.classList.toggle('mini-sidebar');
    }
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

                            <div className="row m-2 mt-4 p-2 rounded" style={{ backgroundColor: "white" }}>
                                <div className="col-6">
                                    <p className="fs-2">Quickai</p>
                                </div>
                                <div className="col-6">
                                    <h1 className="text-end">Invoice</h1>
                                    <h6 className="text-end">Invoice Number - 23123</h6>
                                </div>

                                <hr />
                                <div className="col-4">
                                    <h4>Hotel Details</h4>
                                    <p>Hotel Name</p>
                                    <p>Hotel Location</p>
                                </div>
                                <div className="col-3">
                                    <h6>
                                        <b>Check in:</b>
                                    </h6>
                                    <p>08/12/2021</p>
                                    <br />
                                    <h6>
                                        <b>Booking Id:</b>
                                    </h6>
                                    <p>FDSF432SC4</p>
                                </div>
                                <div className="col-3">
                                    <h6>
                                        <b>Check out:</b>
                                    </h6>
                                    <p>08/12/2021</p>
                                    <br />
                                    <h6>
                                        <b>Payment Method:</b>
                                    </h6>
                                    <p>credit card</p>
                                </div>
                                <div className="col-2">
                                    <h6><b>Rooms</b></h6> 1
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <div className="row">
                                            <div className="col-4">
                                                <b>Description</b>
                                            </div>
                                            <div className="col-4"><b>Rate</b></div>
                                            <div className="col-4"><b>Amount</b></div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-4">
                                                <p>Room Charges</p>
                                            </div>
                                            <div className="col-4">
                                                <p className="text end">$250x2Nightx1room</p>
                                            </div>
                                            <div className="col-4">
                                                <p className="text-end">$500</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-4">
                                                <p>Other Charges</p>
                                            </div>
                                            <div className="col-4">
                                                <p className="text end">0</p>
                                            </div>
                                            <div className="col-4">
                                                <p className="text-end">0</p>
                                            </div>
                                        </div>
                                        <hr />

                                        <div className="row">
                                            <div className="col-4">
                                                <p>Promotional Code</p>
                                            </div>
                                            <div className="col-4">
                                                <p className="text end">LSIDA3ASD</p>
                                            </div>
                                            <div className="col-4">
                                                <p className="text-end">-$100</p>
                                            </div>
                                        </div>
                                        <hr />

                                        <div className="row">
                                            <div className="col-4">

                                            </div>
                                            <div className="col-4">
                                                <p className="text-end"><b>Sub Total:</b></p>
                                            </div>
                                            <div className="col-4">
                                                <p className="text-end">$400</p>
                                            </div>
                                        </div>
                                        <hr />

                                        <div className="row">
                                            <div className="col-4">

                                            </div>
                                            <div className="col-4">
                                                <b className="text end">Tax:</b>
                                            </div>
                                            <div className="col-4">
                                                <p className="text-end">$10</p>
                                            </div>
                                        </div>
                                        <hr />

                                        <div className="row">
                                            <div className="col-4"></div>
                                            <div className="col-4">
                                                <p ><b className="text end">Total:</b></p>
                                            </div>
                                            <div className="col-4">
                                                <p className="text-end">$400</p>
                                            </div>
                                        </div>
                                        <hr />

                                    </div>
                                </div>

                                <p><b>Please Note:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi labore veritatis in praesentium tenetur, laborum officiis, delectus a mollitia, qui incidunt. Dolorem placeat, neque exercitationem harum perspiciatis eligendi praesentium inventore!</p>
                                <hr />
                                <br />
                                <div className="row">
                                    <h5><b className="text-center">Quickai inc.</b></h5>
                                    <p className="text-centr">address of hotel</p>
                                </div>
                                <br />
                                <hr />
                                <br />
                                <div className="row">
                                    <p className="text-center">Note: This computer generated </p>
                                </div>

                                <div className="row">
                                    <div className="col-4">

                                    </div>
                                    <div className="col-2">

                                        <div className="row"><button className="btn border">Print</button></div>
                                    </div>
                                    <div className="col-2">
                                        <div className="row"> <button className="btn border">Download</button></div>
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

export default HotelInvoice;
